# Data-Oriented Design and C++

### Games design is similar to building the Mars Rover
Games are like Mars Rover in what's generally avoided:
> Exceptions are turned off 
> Templates are avoided 
> Iostream are avoided
> Multiple inheritance is out
> Operator overloading is avoided 
> RTTI/Runtime type information 
> STL not used because it doesn't solve a lot of the problems

And what's commonly used across both development fields:
> Custom allocators are used al ot : memory is allocated upfront through division
	>>Block allocators
	>>Linear allocators
> Custom debugging tools that introspect

#### a
These are comparable because they both operate on very fixed sets of resources given the company's developmental focus on console platforms.

#### b 
"If you don't understand the data, you don't understand the problem. Conversely, you can understand the problem by comprehending the data" (Acton, 2014).

#### c 
"If you don't understand the hardware or the cost, you can't reason about the cost of solving the problem" (Acton, 2014).

#### d 
"Everything is a data problem including usability, maintenence, debug-ability, et cetera" (Acton, 2014).

#### e 
By extension, solving problems you don't have complicates the problems that are present. Clarity about this can be derived through analysis of the data (Acton, 2014).

#### f
"Latency and throughput are only the same in sequential systems" (Acton, 2014).

#### g
"Rule of thumb: where there is one [problem], there are many." The first step is to look at data about the temporal axis and begin solving problems at the biggest and then most common peaks (Acton, 2014).

#### h 
"Rule of thumb [2 is about carefully scrubbing one's data]: the more context you have, the better you can make the solution." Keep this in the balance when trimming your data; "don't throw away data you need" (Acton, 2014). 

#### i 
"Rule of thumb [3: non-uniform memory access (NUMA)] extends to input/output and pre-built data all the way back" to the time of the creation of the source (Acton, 2014).


### lies
1) Software is a platform
	>No: hardware is the platform and so each set requires a different solution between 6502, x86, ARM, CELL, PPC, ATI 5870 

2) Code should be architected based on a model of the world that can be imagined. 
	>No: this means that hiding the data is somehow implicit. But this convolutes maintenance and understanding properties of the data (Acton, 2014).
	>>This further promotes the costly implication that information represented in the data is related to the transformations executed upon it (Acton, 2014).


	In real life a chair is a chair but it's only superficial in terms of object-oriented coding because it's an abstracted representation. We cannot write the logic such that it can maintain an abstracted reconstruction/simulated virtual object as an atomic fact with respect to the wy the compiler treats the code (Acton, 2014).

In general, world modeling leads to <b><em>monolithic</em></b>, unrelated data structures and transforms (Acton, 2014). 
It's a problem of being idealistic with one's design decisions (Acton, 2014).

[I may be beating a dead horse with this note:]
Object-oriented and procedural-oriented coding solve problems by beginning with non-sequitors relevant to their solutions (Acton, 2014).
->Engineering by analogy
->Engineering via storytelling

 3) Code is more important than the data it carries. The only purpose of code is to transform the data; our responsibility is to the data not the code. 
 
 [beating the dead horse again]
->Only write code that has provable value. 
->Future-proofing is an imaginary ideal (Acton, 2014)

### These lies cause 5 deficiencies:
1)  performance
2)  concurrency
3)  potential for optimization
4)  stability
5)  means of testing 


### Example (1): a table full of key-value pairs, which is common in code-first design
The problem is that keys are not associated with the values in memory. 

In most cases, we are not dealing with the values but are concerned with the keys in our mental models. 

This will scale to the worst-case in our notation because the complier must load value into decache. With more keys and more values, [performance/efficiency] decreases.

Therefore you do load value into decaching, which consumes bandwidth. 

The real process is (see photo 1) that you start with a key then must read the index then use that index to get the value. 	
Keys are stored together, 
cache will be loaded w/ what's most likley needed,
and when the value is looked up it will likely result in a cache miss (Acton, 2014). 


## Solution: solve for the most common case first! 

#### solution times for context using AMD Piledriver (by Agner Fog, T Uni of Denmark, 1996-2014)

<b>square-roots:</b>
<ul>Instruction</ul> 					<ul>Latency</ul>
SQRTSS/PS 								13-15
VSQRTPS									14-15
SQRTSD/PD 							      24-26
VSQRTPD									24-26

<b>transcendental calculations</b>
<em>on the more expensive side...</em>:
<ul>Instruction</ul> 					<ul>Latency</ul>
FSIN										60-146
FCOS 										~154
FSINCOS									86-141
FPTAN 									86-204
FPATAN									60-352


### A more concrete example (2): float math operations loaded onto an update function
The ratio of executions that are peripheral compared to those that are required to transform to the data is about ten-to-one (Acton, 2014). 
(from http://deplinenoise.wordpress.com/2013/12/28/optimizable-code/)


		class GameObject{
			float m_Pos[2]; float m_Velocity[2]; 
			char m_Name[32];
			Model* m_Model;
			float m_Foo;

			void UpdateFoo(float f){
			float mag = sqrtf(
				m_Velocity[0] * m_Velocity[0] +  // (1) memory read
				m_Velocity[1] * m_Velocity[1]);   // (2) float math
				m_Foo += mag * f; 			    // (3) memory r/m/w, float math
			}
		};

<b>Sound logic</b>
Typically, an L2 cache miss has a window of 150 cycles. 
A square root costs 13-26 cycles based on the aforementioned Piledriver system. Essentially, though, this code roughly equates to four steps per update tick (which occurs on each frame in a typical game engine): (1) access to m_Velocity and m_foo variables cost about 150 cycles each, (2) float math costs 10 cycles, and (3) float math costs about 30 cycles. In summation, this results in a total of about 340 cycles, 300 of which are essentially peripheral operations to the data's transformation.  

A suggested fix reads in the following manner:

		struct FooUpdateIn {
		  float m_Velocity[2];
		  float m_Foo;
		};

		struct FooUpdateOut {
		  float m_Foo;
		};

		void UpdateFoos(const FooUpdateIn* in, size_t count, FooUpdateOut* out, float f)
		{
		  for (size_t i = 0; i < count; ++i) {
		    float mag = sqrtf(
		      in[i].m_Velocity[0] * in[i].m_Velocity[0] +
		      in[i].m_Velocity[1] * in[i].m_Velocity[1]);
		      out[i].m_Foo = in[i].m_Foo + mag * f;
		  }
		}

This is a refined block which takes advantage of memory locality within the cache. In this new version, a cache misses once every fifth iteration given FooUpdateIn is 12 bytes; about 5.3 of these variables can be aligned on a single cache line. 

Consider further the notion that the count of each instance is 32, one can then produce a value of objects that fit with the architecture: 


		struct FooUpdateIn { 	
		  float m_Velocity[2];
		  float m_Foo;
		}; 						// 12 bytes * count(32) == 384 == 64 * 6 

		struct FooUpdateOut {
		  float m_Foo;
		};						//  4 bytes * count(32) == 128 == 64 * 2 

		void UpdateFoos(const FooUpdateIn* in, size_t count, FooUpdateOut* out, float f)
		{
		  for (size_t i = 0; i < count; ++i) {
		    float mag = sqrtf(
		      in[i].m_Velocity[0] * in[i].m_Velocity[0] +		// 6 / 32 = ~5.33 loop/cache line 
		      in[i].m_Velocity[1] * in[i].m_Velocity[1]);		// Sqrt + math = ~40 * 5.33 = 213.33 cycles/cache line 
		      out[i].m_Foo = in[i].m_Foo + mag * f;			// + streaming prefetch bonus (?)
		  }
		}

### Example (3) : booleans in structs: a case in extremely low information density
Low information density: this is a waste of at least 7 bits. Therefore there's an extra ~200 cycles to read this value. 


### Example (4) : bools for last-minute decision making 
[side notes about another boolean example:] 
the next few minutes discusses MSVC compiler (naive transformation through a function that returns boolean)
Clang

	int Foo::Bar(int count){
		int value = 0;
		for ( int i =0 ; i < count ; ++i){
			if(m_NeedParentUpdate){
				value++; 						
			}
		}
		return (value);
	}

### Example (5) : a slightly more complex example which is very predictable in production

	int Foo::Bar(int count){
		int value = 0;
		for ( int i =0 ; i < count ; ++i){
			if(m_NeedParentUpdate){
				value++; 						
			}
		}
		return (value);
	}

		int AnotherFoo::AnotherBar(int count){
		int value = 0;
		for ( int i =0 ; i < count ; ++i){
			if(m_NeedParentUpdate){
				value++; 						
			}
		}
		return (value);
	}





[side-notes] 
-Acton is an Engine Director

<b>The components required for a robust game development system</b>
<ul>Engine team builds runtime systems:</ul>
rendering
animation and gestures
streaming
cinematics
vfx
post-fx
navigation
localization

<ul>dev tools:</ul>
level creation
lighting
material editing
vfx creation
animation/state machine editing
visual scripting
scene painting
cinematics creation

[side-note] <b>Values</b>
Hard deadlines because of million-dollar budgets for marketing
Soft realtime performance requirements (Soft=33ms / ns is the scale )
Usability
Performance in general
Maintinence in general for post-launch
Debugability 

<b>languages used</b>
C
C++ is 70% 
Asm (most preferred)
Perl
JS
C#
Shaders for pixels, vertices, geometry, compute shader