

"Software is getting slower more rapidly than hardware becomes faster"
Nilaus Wirth <em> A Plea for Lean Software </em> (1995)
<a href='https://cr.yp.to/bib/1995/wirth.pdf'>Link</a>
He also wrote <em>Algorithms + Data Structures = Programs</em>

Steve Jobs initiated the centrality of mobile platforms and a newly crucial concern: batteries.
In contrast with the power-efficient instructions myth. Instead we must "race to sleep" through code that runs faster to achieve stasis. 

Compute/watt is central to data-center operations. 

Side note: Java is faster in consideration for throughput for long-term processing and garbage-collection because of optimization with JVM. 


Caruth's thesis is about two points: 1) the centrality of <em>efficiency</em> through algorithms and 2) <em>performance</em> through data structures.

### definition of efficiency
<b>Efficiency</b>: how much work is required by a task. One can do this through doing less work; an efficient program is one that does the minimum amount of work that a task requires. 

We should strive for the physical limit for how fast something can be achieved on the hardware.

Namely, each core should be used. 



# Efficiency through algorithms
### Example is sub-string searching: from most work to least work
  1) Initially: O(n^2): looping over string continuously 
  2) Then: Knuth-Morris-Pratt: loops over substring and skips ahead 
  3) Finally: Boyer Moore: use the end of the string 


## Simple examples of systemic minor mistakes that a profiler will never pick these up:
### Simple algorithmic hiccups

#### Example 1
	std::vector<X>  f(int n){
		std::vector<X> result;
		for (int i =0 ; i < n; ++i)
			result.push_back(X(...));   //don't need to allocate memory here 
		return result;
	}
to: 

	std::vector<X>  f(int n){
		std::vector<X> result;
		result.reserve(n); 			//reserve it here 
		for (int i =0 ; i < n; ++i)
			result.push_back(X(...)); 
		return result;
	}

#### Example 2
	Unordered map repeats the same result 4 times needlessly:
	(This default constructs and then inserts:)

	X *getX(std::string key,
			std::unordered_map<std::string, 
			std::unique_ptr<X>> &cache){
		if (cache[key])
			return cache[key].get();

		cache[key] = std::make_unique<X>(...);
		return cache[key].get();
	}
to:

	X *getX(std::string key,
			std::unordered_map<std::string, 
			std::unique_ptr<X>> &cache){
		std::unique_ptr<X> &entry = cache[key]; 					//simple fix
		if (cache[key])
			return cache[key].get();
		cache[key] = std::make_unique<X>(...);
		return cache[key].get();
	}


Side note: input parameters can be affected -- pointer in because its origin can be unknown 

# Performance through data structures / "Just say no to linked lists"
## A quick look at latency

Context: 1billion cycles/second; 12+ cores per socket, 3+ execution ports per core
	>: 36 billions per second are possible (but most of that time is waiting for data)

	>: We need faster memory but until then it's instructive to consider the hierarchical cache system on the CPU:

(Diagram by Jeff Dean)

One cycle on a 3 GHz processor =						     1 ns
L1 cache reference = 										     0.5 ns
Branch mispredict 											     5 ns 
L2 cache reference 											7 ns / 14x L1 cache
Mutex lock/unlock												25 ns
Main memory reference										100 ns /20x L2, 200x L1
Compress 1k bytes with Snappy 								3k ns
Send 1k bytes over 1 Gbps network							10k ns / 0.01ms
Read 4k randomly from SSD									150k ns / 0.15 ms	  
Read 1 MB sequentially from memory						     250k ns / 0.25 ms
Round trip within same data-center							500k ns / 0.5 ms
Read 1 MB sequentially from SSD							1mil ns / 1 ms / 4x memory
Disk seek														10mil ns / 10 ms 
Read 1 MB sequentially from HDD							20 mil ns / 20 ms
Send packet CA->Netherlands->CA 							150 mil ns / 150 ms


### STD::List, which is a doubly-linked list
-each node is separately allocated, which is awful because node is allocated randomly, leading to a tremendous amount of traversed lookups between pointers.

-all traversal operations chase pointers to totally new memory

-in most cases, every step is a cache miss:
	Cache Misses:
			Each traversal causes a cache miss and so a safe 
			assumption is that for every movement between
			nodes you have a 1% chance of being in L1 and 
			maybe a 10% chance of being in L2. Otherwise 
			it's safe to assume it will be in main memory (80-90%). 


-only use this when you rarely traverse the list but frequently update it 

>Critique of Iterator Invalidation

### Therefore just use STD::Vector
	>: Knowing number of items to be allocated to a defined 
	upper limit and/or is used for a brief period, just remove 
	items from the front. One can add to the vector indefinitely 
	and keep track of the front with an index. 

### vs Stacks, Queues, and Maps? 

#### vs Stacks
	>Knowing number of items to be allocated to a defined  
	upper limit and/or is used for a brief period, just remove 
	items from the front. One can add to the vector 
	indefinitely and keep track of the end with an index. 

#### vs Queues
	>Knowing number of items to be allocated to a defined 
	upper limit and/or is used for a brief period, just remove 
	items from the front. One can add to the vector 
	indefinitely and keep track of the front with an index. 

[side-noted]
#### vs Maps >> proper hash table design
["STD::Map solves no problems."]
It's a linked list where non-traversal elements are removed
	>: STD:Unordered_Map requires buckets of key-value pairs for each hash.
	
	>: Buckets are linked lists 
	
	>: Cache misses are incredibly likely

a. Instead of buckets, use open addressing into a table of key-value pairs. 
b. A table can be stored as contiguous range of memory. 
c. Use local/linear probing on collisions to find open slot in the same cache line.
	https://en.wikipedia.org/wiki/Linear_probing
d. Keep both key and values small.


# Side notes 
### In practice, both algorithms and structures are tightly related
Structures <em>typically</em> inform algorithms but they're meant to be balanced.

[Side-ish notes]
-Bubble sort is great for small data sets (under 64, if they're numbers especially)
-Cuckoo hashing: backup hash algorithm can be algorithmically linear but every probe is a cache miss

