# Module 05: Computational Cost

## Core Question

Why does counting to 1000 take longer than counting to 10?

## Starting Point: Obvious Inefficiency

This seems like a trivial question. Of course counting to 1000 takes longer: you say more numbers.

But consider: Both tasks are "count to N." The algorithm is identical. Only the input size changed.

**Question 1:** If the algorithm doesn't change, why does the runtime change?

This is the foundation of computational complexity: The time or resources required to solve a problem scales with input size, even when the method stays the same.

## Linear vs Exponential Growth

**Task A:** Count to N
Time required: Proportional to N
(Double N, double the time)

**Task B:** List all possible orderings of N items
Time required: Proportional to N! (N factorial)
(Add one item, multiply time by N+1)

**Question 2:** How much longer does it take to list all orderings of 10 items vs 9 items?

For 9 items: 9! = 362,880 orderings
For 10 items: 10! = 3,628,800 orderings

Adding one item multiplied the work by 10.

**Question 3:** Why does adding one item have such disproportionate impact?

Because each new item can be inserted into any position in all existing orderings. The problem doesn't grow by addition (N+1), it grows by multiplication (N × previous work).

## The Traveling Salesman Problem

A salesman must visit N cities and return home. What route minimizes total distance?

**Brute Force Approach:** Check every possible route, pick the shortest.

**Question 4:** How many routes exist for N cities?

For N cities, there are (N-1)! / 2 possible routes (accounting for symmetry).

- 5 cities: 12 routes (checkable)
- 10 cities: 181,440 routes (slow but feasible)
- 20 cities: 60,822,550,200,000,000 routes (computationally infeasible)
- 50 cities: More routes than atoms in the observable universe

**Question 5:** If computer speed doubles every year, how long before you can solve the 50-city problem by brute force?

The answer is depressing: Adding cities increases routes factorially. Doubling computer speed only cuts time in half. You're losing the race exponentially.

## The Ladder of Growth Rates

Different algorithms scale differently:

**Constant - O(1):** Looking up an array element by index
Time: Same regardless of array size

**Logarithmic - O(log N):** Binary search in sorted list
Time: Doubles when input size squares

**Linear - O(N):** Counting to N, scanning an array
Time: Doubles when input doubles

**Linearithmic - O(N log N):** Efficient sorting algorithms
Time: A bit more than doubles when input doubles

**Quadratic - O(N²):** Comparing every item to every other item
Time: Quadruples when input doubles

**Exponential - O(2^N):** Trying all subsets of N items
Time: Doubles when you add one item

**Factorial - O(N!):** Trying all orderings of N items
Time: Multiplies by N when you add one item

**Question 6:** Which of these growth rates are "tractable" (solvable for large inputs)?

Generally: Polynomial time (like O(N), O(N²), O(N³)) is considered tractable.
Exponential and factorial are intractable for large N.

## Why Polynomial vs Exponential Matters

Consider two algorithms for the same problem:

**Algorithm A:** O(N³) - cubic time
**Algorithm B:** O(2^N) - exponential time

For small N (like N=10):
- Algorithm A: 10³ = 1,000 operations
- Algorithm B: 2^10 = 1,024 operations

Approximately equal.

For larger N (like N=30):
- Algorithm A: 30³ = 27,000 operations
- Algorithm B: 2^30 = 1,073,741,824 operations

Algorithm B takes ~40,000 times longer.

**Question 7:** At what point does the exponential algorithm become completely impractical?

## P vs NP: The Million Dollar Question

Some problems can be solved in polynomial time (class P).
Some problems can be verified in polynomial time but we don't know if they can be solved in polynomial time (class NP).

**Example:** Sudoku

**Solving:** Given an empty Sudoku grid with some numbers filled in, find a valid solution.
(Unknown if solvable in polynomial time)

**Verifying:** Given a completed Sudoku grid, check if it's valid.
(Trivially polynomial: just check rows, columns, and boxes)

**Question 8:** Why is verification often easier than solving?

Because solving requires searching through possible solutions. Verifying requires checking one specific solution. Search is expensive. Validation is cheap.

**Question 9:** If solving is exponential but verifying is polynomial, what does that enable?

This asymmetry enables cryptography, zero-knowledge proofs, and proof-of-work systems (like Bitcoin).

## The Sorting Problem

Given N numbers in random order, sort them from smallest to largest.

**Naive Approach (Bubble Sort):** Repeatedly swap adjacent elements until sorted.
Time: O(N²)

**Efficient Approach (Merge Sort):** Divide and conquer recursively.
Time: O(N log N)

**Question 10:** For N=1,000,000, how much faster is merge sort?

Bubble Sort: ~1,000,000² = 1,000,000,000,000 comparisons
Merge Sort: ~1,000,000 × log₂(1,000,000) ≈ 20,000,000 comparisons

Merge sort is ~50,000 times faster.

**Question 11:** Can you do better than O(N log N) for general sorting?

No. It's mathematically proven that comparison-based sorting cannot be faster than O(N log N) in the worst case.

This is a lower bound: Not due to our lack of cleverness, but due to fundamental limits of comparison-based logic.

## The Search Problem

Find a specific value in a list of N items.

**Unsorted List:** Must check every item. O(N) time.

**Sorted List:** Use binary search. O(log N) time.

Binary search:
1. Check middle item
2. If target is smaller, search left half
3. If target is larger, search right half
4. Repeat until found or proven absent

**Question 12:** Why does sorting the list first enable faster search?

Because structure (sorted order) allows shortcuts. Random order forces exhaustive checking.

**Question 13:** When is it worth sorting before searching?

If you search once: Not worth it. (Sorting is O(N log N), searching unsorted is O(N))
If you search many times: Definitely worth it. (One-time sort cost, then cheap searches)

This tradeoff appears everywhere: Spend resources upfront to create structure that enables efficient future operations.

## Amortized Cost

Some operations are expensive occasionally but cheap on average.

**Example:** Dynamic array (like Python list)

Adding elements:
- Usually: O(1) - just append to existing space
- Occasionally: O(N) - when array is full, allocate larger array and copy everything

**Question 14:** If copying happens every time the array doubles, what's the average cost per insertion over N insertions?

The math works out to O(1) amortized time. Even though individual insertions occasionally cost O(N), they happen infrequently enough that the average is constant.

## Space vs Time Tradeoffs

You can often trade memory for speed or vice versa.

**Fibonacci Sequence:**

Naive recursive:
```
fib(n):
  if n <= 1: return n
  return fib(n-1) + fib(n-2)
```

Time: O(2^N) - exponential!
Space: O(N) - stack depth

With memoization (caching results):
Time: O(N) - each value computed once
Space: O(N) - store all computed values

**Question 15:** You traded exponential time for linear space. Is this always a good trade?

Usually yes, when memory is available. But for extremely large N, memory becomes the constraint. Sometimes recomputing is cheaper than storing.

## The Halting Problem

Can you write a program that determines whether any given program will eventually halt or run forever?

Alan Turing proved: No such program can exist.

**Proof sketch:**

Assume a halt-checker exists: `halts(program, input) → true/false`

Construct this program:
```
paradox(program):
  if halts(program, program):
    loop forever
  else:
    halt immediately
```

**Question 16:** What happens when you run `paradox(paradox)`?

If `halts(paradox, paradox)` returns true, then paradox loops forever (contradiction).
If it returns false, then paradox halts immediately (contradiction).

Therefore, no halt-checker can exist.

**Question 17:** Why does this proof matter for computational cost?

Because it proves there are fundamental limits to what programs can determine about programs. Some questions about computation are undecidable, regardless of how much time or resources you allocate.

## The Pigeonhole Principle

If you put N+1 pigeons into N holes, at least one hole contains multiple pigeons.

**Application:** Collision detection

If you hash N items into M buckets where N > M, at least one bucket contains multiple items.

**Question 18:** Why does this matter for hash tables and cryptographic hashing?

Hash tables must handle collisions (multiple keys mapping to same bucket).
Cryptographic hashes must make collisions hard to find deliberately, even though they mathematically exist.

## Random vs Average vs Worst Case

Algorithm performance can vary by input:

**Best case:** Input is already optimal (rarely useful metric)
**Average case:** Performance across typical inputs
**Worst case:** Performance on adversarially chosen inputs

**Quick Sort:**
Best/Average: O(N log N)
Worst: O(N²)

**Question 19:** When would you care about worst-case vs average-case performance?

For systems where adversaries can choose inputs (security-critical systems), worst-case matters.
For typical use, average-case matters more.

## Checkpoint Question

**You have two algorithms for the same problem:**
- **Algorithm A:** O(N²) time, O(1) space
- **Algorithm B:** O(N log N) time, O(N) space

**For N=1,000,000:**
- How much faster is Algorithm B?
- How much more memory does it use?
- When would you choose A over B?
- When would you choose B over A?

Your answer should address:
- Quantitative comparison of growth rates
- Resource tradeoffs (time vs space)
- Context-dependent decision making
- Practical constraints vs theoretical complexity

If you cannot reason through this, revisit the module. Understanding computational cost is essential for Module 06's exploration of irreducibility.

## What This Module Established

Not all algorithms scale equally. Some problems become impractical as input grows, not due to implementation quality, but due to fundamental computational structure.

Key insight: There's a difference between "theoretically solvable" and "practically computable." Computational cost determines feasibility.

Module 06 explores a deeper limit: Some processes cannot be shortcut at all. You must run them step-by-step, regardless of how clever your algorithm is.
