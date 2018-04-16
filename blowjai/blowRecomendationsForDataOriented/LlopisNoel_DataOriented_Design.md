http://gamesfromwithin.com/data-oriented-design

Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP) by LLopis, 2009 

"The culprit? Random memory access patterns and constant cache misses. "

### With regards to Procedural Programming and OOP:
"Notice that the main focus of both approaches is code: plain procedures (or functions) in one case, and grouped code associated with some internal state in the other. Data-oriented design shifts the perspective of programming from objects to the data itself: The type of the data, how it is laid out in memory, and how it will be read and processed in the game."
Can be thought of as <b>particle-driven programming</b>

### Clearing up confusion
"A data-driven game is usually a game that exposes a large amount of functionality outside of code and lets the data determine the behavior of the game." This is orthogonal to data-oriented and so this is applicable to any type of programming approach. 

## Ideal data
What's the format?
The data is in a format that can be used with the least amount of effort; the format is identical with the output under ideal circumstances. 
Processing is therefore limited to copying that information. 

<b> Large blocks of contiguous, homogenous data that is processed sequentially </b> because this goes along with the general goal of minimizing transformations. This can be baked during asset-building. 

Consider
<img src='http://gamesfromwithin.com/wp-content/uploads/2009/12/oo_design.png'> 
versus
<img src='http://gamesfromwithin.com/wp-content/uploads/2009/12/do_design1.png'>

## This removes trees: inheritence, containment, or message-passing trees. 

# how
1. Break down each object into different components, 
2. Group the components of the same type together in memory regardless of what object they came from

# why-how
OOP relies on one object but in complex state machines there are rarely singular instances of objects.

#advantages 
## parallelization 
-> Consider the tedious task of parallelizing object-oriented code. It is error-prone due to sometimes confusing synchronization tasks (meant to halt concurrency at specific data; this causes idling until it has been debugged).
In data-oriented design, this is a much simpler process: data is input, a small function is assigned to process it and return output. That transformation can easily be taken and split among multiple threads with minimal synchronization to account for. (This can even be completed on the processor's local memory). 

## cache utilization
-> A codebase that is data-oriented is very efficient in its use of the instruction cache because the same code is executed repeatedly. 
-> If the data is layed out in large, contiguous blocks, the data can be processed sequentially which results in impeccable cache utility, which translates into performance. 
-> This is much simpler than re-writing C in assembly. 

"Remember that all a game does is transform some data (assets, inputs, state) into some other data (graphics commands, new game states). By keeping in mind that flow of data, we can make higher-level, more intelligent decisions based on how the data is transformed, and how it is used. That kind of optimization can be extremely difficult and time- consuming to implement with more traditional OOP methods."

## modularity
-> The tendency is to write small functions because they will usually be needed for transformation. 
-> Lots of leaf functions/subroutines without many dependencies; this makes the comprehension and alteration of the code very easy. 
## testing 
-> Testing is a simple process of calling transform functions and checking output data, as opposed to investigation into potentially dense structures in memory. 

#disadvantages 
1) different from what people use or what they're taught in school; the way the programmer has to conceptualize their craft has to change fundamentally 
2) it can be tough to interface with existing code bases since it's a relatively novel approach across most work environments 

#application 