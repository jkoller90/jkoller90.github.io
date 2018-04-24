/*
Data-Oriented Demo: SOA, composition
Taken from video:

In C++, one of the simplest ways of organizing game objects
(for example, this is done in The Witness).
Shallow trees:
*/

//base class
struct Entity{
	Vector3 position;
	Quaternion orientation;
	unsigned int flags;

	virtual void update(){}
};
//derived/subclass
struct Door : public Entity{
	float openness_current;
	float openness_target;

	void update() override;
};
//derived/subclass
struct Human : public Entity{
	char *name;

	void update() override;
};

/*
Side note on override:
1) It shows the reader of the code that 
"this is a virtual method, that is overriding 
a virtual method of the base class."

2) The compiler also knows that it's an override, 
so it can "check" that you are not altering/adding 
new methods that you think are overrides.
*/

/*
The bigger your state is the worse the problems will be.

Each update function is specifically written to each subclass
*/

// when this is said: 
struct Door : public Entity

//this is written and used: 
struct Door{
	//vtable pointer always goes first:
	void *door_vtable;

	//members pulled from Entity:
	Vector3 position;
	Quaternion orientation;
	unsigned int flags;

	//members belonging to Door:
	float openness_current;
	float openness_target;
};

/*
With this simple single-inheritence, the game is already slow because:

*All classes are different sizes
	Consider, too the fact that a game has:
	**Particles
	**Boats
	**Buttons
	**Animations  etc. 
*Therefore one can't allocate entities contiguously 
(therefore random memory write/read)
*Cache misses very consistently

These performance hits scale up with increased leanness of a system:
1) Mobile
2) Console
3) Macbook
4) Laptop
5) PC 

Consider that there are 5-6 render passes, meaning each 
visible entity has to be passed that many times to render:
-Shadows into buffer
-Reflection
-Main scene
-Z pre buffer pass/Pre Z Buffer pass (https://stackoverflow.com/questions/3702984/pre-z-buffer-pass-with-opengl)
	>Even a pre-z-buffer to catch all cache misses is expensive and annoying to the user.

therefore: many subsystems need to be running to handle all of this to specify/micromanage cache use




There are workarounds for this in C and C++ but it makes 
gameplay code,which should be simple, 
very complicated/convoluted. 

Even if you run an array-run program w/ detailed caching code,
you lose a lot of features of the language.
*/


/*
What are some fixes? 
Let's first think about what we get from C++:
	1 ) Abiility to express an is-a / has-a relationship 
	in a very concise-yet-coherent fashion: 
-not driven by abstract world-modeling; instead talking about real items
that the code needs at certain points 
*/

struct Entity{
	Vector3 position;
};

struct Door{
	Entity entity;
	float openness_current;
};
// but then you have to say door.entity.position repeatedly. 
door.entity.openness_current = 1.0f; //etc...
	// vs door.position or door.openness_curent etc...

//	2) Lets you call functions with parameter types of the base class:

void do_something(Entity *e);

Door door;
do_something(&door);

//	3) Gives you vtable functionality (organizing functions into known slots on the base class):

struct Entity{
	virtual void update(){}
};
struct Door : public Entity{
	void update() override { printf("Hi!\n");}
};
void do_something(Entity *e){
	e->update();
};
Door door;
do_something(&door);

//4) convenience of having implicit 'this->' in member functions

void Entity::print_position(){
	printf("My position: (%f, %f, %f)\n", position.x, position.y, position.z)
}







