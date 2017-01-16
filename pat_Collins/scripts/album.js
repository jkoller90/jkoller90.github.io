var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSoundFile = null;
var currentVolume = 80;
var currentSongFromAlbum = null;
var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var albumList = [albumPicasso, albumMacDonald, albumMarconi];
var albumCover = document.getElementsByClassName("album-cover-art")[0];
var currentIdx = 0;

var setSong = function (songNumber) {
    if (currentSoundFile) {
        currentSoundFile.stop();
    }
    currentlyPlayingSongNumber = parseInt(songNumber);
    currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
    // #1
    currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
        // #2
        formats: ['mp3']
        , preload: true
    });
    setVolume(currentVolume);
};
var setVolume = function (volume) {
    if (currentSoundFile) {
        currentSoundFile.setVolume(volume);
    }
};

var getSongNumberCell = function (number) {
    return $('.song-item-number[data-song-number="' + number + '"]');
}
var updatePlayerBarSong = function (songName, artistName) {
    if (arguments[0] && arguments[1]) {
        $('.song-name').text(songName);
        $('.artist-name').text(artistName);
        $('.artist-song-mobile').text(songName + " - " + artistName);
        $('.main-controls .play-pause').html(playerBarPauseButton);
    }
    else {
        $('.song-name').text("");
        $('.artist-name').text("");
        $('.artist-song-mobile').text("");
        $('.main-controls .play-pause').html(playerBarPlayButton);
    }
}
var createSongRow = function (songNumber, songName, songLength) {
    //template is adjusted to contain attribute/'property' on which is a figurative boolean
    //both in song-item-number and song-item-title 
    var template = '<tr class="album-view-song-item">' + '  <td class="song-item-number" id="' + songName + '" on="false" data-song-number="' + songNumber + '">' + songNumber + '</td>' + '  <td class="song-item-title" id="' + songName + '" on="false">' + songName + '</td>' + '  <td class="song-item-duration">' + songLength + '</td>' + '</tr>';
    //now returns a jquery template
    var $row = $(template);
    var onHover = function (event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(playButtonTemplate);
        }
    };
    var offHover = function (event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(songNumber);
        }
    };
    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;
};
var setCurrentAlbum = function (album) {
    currentAlbum = album;
    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');
    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);
    $albumSongList.empty();
    for (var i = 0; i < album.songs.length; i++) {
        var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        $albumSongList.append($newRow);
    }
};
var updateSeekBarWhileSongPlays = function () {
    if (currentSoundFile) {
        currentSoundFile.bind('timeupdate', function () {
            $('.player-bar .seek-bar #player-fill').width(currentSoundFile.getPercent() + "%");
            $('.player-bar .seek-bar #player-thumb').css({
                left: currentSoundFile.getPercent() + "%"
            });
        }); 
    }
};
var updateTime = function(){
    if(currentSoundFile){
        currentSoundFile.bind('timeupdate', function(){
            $(".current-time").text(buzz.toTimer(currentSoundFile.getTime()));
            $(".total-time").text(buzz.toTimer(currentSoundFile.getDuration() - currentSoundFile.getTime()));
        });
    }
}

var updateSeekPercentage = function ($seekBar, seekBarFillRatio) {
    var offsetXPercent = seekBarFillRatio * 100;
    // Math.max makes sure percentage isn't less than 0 and Math.min 
    //so it doesn't exceed 100 
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(100, offsetXPercent);
    // convert percentage to a string
    var percentageString = offsetXPercent + '%';
    $seekBar.find('.fill').width(percentageString);
    $seekBar.find('.thumb').css({
        left: percentageString
    });
};
var setSongDuration = function(){
//    $(".song-item-duration").text(buzz.)
}
var setupSeekBars = function () {
    var $seekBars = $('.player-bar .seek-bar');
    //    $seekBars.children().html("style")="width:0%;";
    $seekBars.click(function (event) {
        // pageX is an event value that holds the X coordinate at which the event happens
        //subtract the offset() of the seek bar from the left side
        var offsetX = event.pageX - $(this).offset().left;
        var barWidth = $(this).width();
        // calculates seekBarFillRatio
        var seekBarFillRatio = offsetX / barWidth;
        // #5
        if ($(this).parent().attr('class') == 'seek-control') {
            seek(seekBarFillRatio * currentSoundFile.getDuration());
        }
        else {
            setVolume(seekBarFillRatio * 100);
        }
        updateSeekPercentage($(this), seekBarFillRatio);        

    });
    $seekBars.find('.thumb').mousedown(function (event) {
        $(document).bind('mouseup.thumb', function () {
            $(document).unbind('mousemove.thumb');
            $(document).unbind('mouseup.thumb');
        });
        // #8
        var $seekBar = $(this).parent();
        // #9
        $(document).bind('mousemove.thumb', function (event) {
            var offsetX = event.pageX - $seekBar.offset().left;
            var barWidth = $seekBar.width();
            var seekBarFillRatio = offsetX / barWidth;
            if ($seekBar.parent().attr('class') == 'seek-control') {
                seek(seekBarFillRatio * currentSoundFile.getDuration());
            }
            else {
                setVolume(seekBarFillRatio);
            }
            updateSeekPercentage($seekBar, seekBarFillRatio);            

        });
        // #10
    });
};


var seek = function (time) {
    if (currentSoundFile) {
        currentSoundFile.setTime(time);
    }
}
//sets text of element w/ currentTime class to the current time in the song (.current-time)
function setCurrentTimeInPlayer(currentTime) {
   
    console.log($(currentTime), "currentTime from in setCurrentTimeInPlayer");
    $(currentTime).text(buzz.toTimer(currentSoundFile.getTime()));
}
  
var playButtonTemplate = function (songName) {
    playTemplate = '<a class="album-song-button" id="' + songName + '" on="false"><span class="ion-play" ></span></a>';
    return playTemplate;
}
var pauseButtonTemplate = function (songName) {
    pauseTemplate = '<a class="album-song-button" id="' + songName + '" on="false"><span class="ion-pause" ></span></a>';
    return pauseTemplate;
}
var playerBarPlayButton = "<span class='ion-play'></span>";
var playerBarPauseButton = "<span class='ion-pause'></span>";
var mainControlPlayPause = $('.main-controls .play-pause');
var $playPauseMain = $(".play-pause").children()[0];

function togglePlayFromPlayerBar() {
    //if the song is playing (currentsound file exists) and pause button is clicked
    //change the song number cell from pause button to play button
    //change html of player bar's pause button to a play button
    //pause the song 
    //    var on = false;
    if (currentSoundFile) {
        if (currentSoundFile.isPaused() === false) {
            $(".play-pause").html('<span class="ion-play"></span></a>');
            //        $playPauseMain = '<span class="ion-play"></span>';
            var $songNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
            $songNumberCell.html(playButtonTemplate);
            currentSoundFile.pause();
        }
        else {
            $(".play-pause").html('<span class="ion-pause"></span></a>');
            var $songNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
            $songNumberCell.html(pauseButtonTemplate);
            currentSoundFile.play();
        }
        //        on = false;
    }
    //if song is puased and play button is clicked in player bar:
    //change song nubmer cell from play button to pause
    //change html of player bar's play button to puase ubtton
    //play the song
};
$(document).ready(function () {
    setCurrentAlbum(albumPicasso);
    setupSeekBars();
    mainControlPlayPause.click(function () {
        var $mainPlayPause = $(this);
        //.first().attr('class');
        togglePlayFromPlayerBar();
    });
    $previousButton.click(previousSong);
    $nextButton.click(nextSong);

    //    $('.fill').width(0);
    //    $('.thumb').
});
albumCover.onclick = function () {
    setCurrentAlbum(albumList[currentIdx++]);
    if (currentIdx > 2) {
        currentIdx = 0;
    }
};
var nextSong = function () {
    if (currentlyPlayingSongNumber === currentAlbum.songs.length) {
        currentlyPlayingSongNumber = 1;
    }
    else {
        currentlyPlayingSongNumber++;
    }
    var currentSongObj = currentAlbum.songs[currentlyPlayingSongNumber - 1];
    var getLastSongNumber = function (index) {
        if (index === 1) {
            return currentAlbum.songs.length;
        }
        else {
            return index - 1;
        }
    };
    // Update the Player Bar information
    $('.currently-playing .song-name').text(currentSongObj.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongObj.title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    var lastSongNumber = parseInt(getLastSongNumber(currentlyPlayingSongNumber));
    var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    setSong(currentlyPlayingSongNumber);
    currentSoundFile.play();
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
};
var previousSong = function () {
    if (currentlyPlayingSongNumber === 1) {
        currentlyPlayingSongNumber = currentAlbum.songs.length;
    }
    else {
        currentlyPlayingSongNumber--;
    }
    var currentSongObj = currentAlbum.songs[currentlyPlayingSongNumber - 1];
    var getNextSongNumber = function (index) {
        if (index === currentAlbum.songs.length) {
            return 1;
        }
        else {
            return index + 1;
        }
    };
    currentSoundFile.play();
    // Update the Player Bar information
    $('.currently-playing .song-name').text(currentSongObj.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongObj.title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    var nextSongNumber = parseInt(getNextSongNumber(currentlyPlayingSongNumber));
    var $lastSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    setSong(currentlyPlayingSongNumber);
    currentSoundFile.play();
    var $nextSongNumberCell = getSongNumberCell(nextSongNumber);
    $lastSongNumberCell.html(pauseButtonTemplate);
    $nextSongNumberCell.html(nextSongNumber);
};
var clickHandler = function () {
    var songNumber = parseInt($(this).attr('data-song-number'));
    var songName = $(this).attr('id');
    var artistName = $(".album-view-artist").text();
    if (currentlyPlayingSongNumber !== null) {
        var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
        currentlyPlayingCell.html(currentlyPlayingSongNumber);
    }
    if (currentlyPlayingSongNumber !== songNumber) {
        // Switch from Play -> Pause button to indicate new song is playing.
        //        currentSoundFile.play();
        var $volumeFill = $('.volume .fill');
        var $volumeThumb = $('.volume .thumb');
        $volumeFill.width(currentVolume + '%');
        $volumeThumb.css({
            left: currentVolume + '%'
        });
        setSong(songNumber);
        $(this).html(pauseButtonTemplate);
        updatePlayerBarSong(songName, artistName);
        currentSoundFile.play();
    }
    else if (currentlyPlayingSongNumber === songNumber) {
        // Switch from Pause -> Play button to pause currently playing song.
        if (currentSoundFile.isPaused()) {
            $(this).html(pauseButtonTemplate);
            $('.main-controls .play-pause').html(playerBarPauseButton);
            currentSoundFile.play();
        }
        else {
            $(this).html(playButtonTemplate);
            $('.main-controls .play-pause').html(playerBarPlayButton);
            currentSoundFile.pause();
        }
    }
    updateSeekBarWhileSongPlays();
    updateTime();
};
//https://gist.github.com/vvasilev-/3058663