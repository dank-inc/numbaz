# Module 04: Prime Numbers - An Introduction

## Core Question

Why can't you divide 7 evenly?

## Starting Point: Division and Leftover

You have 12 apples. You can divide them evenly among:
- 2 people (6 each)
- 3 people (4 each)
- 4 people (3 each)
- 6 people (2 each)

You have 13 apples. You can divide them evenly among:
- Only 1 person (13 apples)
- Or 13 people (1 apple each)

**Question 1:** What makes 12 and 13 behave differently under division?

The number 12 has many divisors: 1, 2, 3, 4, 6, 12
The number 13 has only two divisors: 1, 13

Numbers like 13 are called prime. They resist division.

## The Definition

A prime number is any integer greater than 1 that has exactly two divisors: 1 and itself.

**Question 2:** Why do we exclude 1 from being prime?

If 1 were prime, many mathematical theorems would require adding "except 1" to their statements. It's more elegant to define primes as having exactly two divisors, not "at most two."

**Question 3:** Is 2 prime?

Yes. It's the only even prime. Every other even number is divisible by 2, so cannot be prime.

## Building Blocks of Numbers

Every number greater than 1 is either:
- Prime (indivisible except by 1 and itself)
- Composite (built from multiplying primes together)

Examples:
- 6 = 2 × 3 (composite)
- 7 = prime
- 8 = 2 × 2 × 2 (composite)
- 9 = 3 × 3 (composite)
- 10 = 2 × 5 (composite)
- 11 = prime

**Question 4:** Can you write 30 as a product of primes?

**Question 5:** Can you write it differently, using a different set of primes?

The answer to Question 5 is no. This is the Fundamental Theorem of Arithmetic: Every integer has a unique prime factorization (ignoring order).

30 = 2 × 3 × 5, and there is no other way to express 30 as a product of primes.

## Primes as Atoms

If composite numbers are molecules, primes are atoms. You can break 30 into 2, 3, and 5. But you cannot break 5 further (without leaving the integers).

**Question 6:** Why does mathematics care about prime factorization?

Because many properties of a number are determined by its prime factors:
- Whether it's even or odd (does it have factor 2?)
- Whether it's divisible by 3 (does it have factor 3?)
- Its relationship to other numbers

Understanding primes means understanding the structure of all numbers.

## The Sieve of Eratosthenes

Ancient method for finding primes:

1. Write numbers from 2 to 100
2. Circle 2, cross out all multiples of 2
3. Circle the next uncrossed number (3), cross out its multiples
4. Circle the next uncrossed number (5), cross out its multiples
5. Continue until all numbers are circled or crossed

The circled numbers are primes.

**Question 7:** Why does this work?

If a number is composite, it must be divisible by a prime smaller than itself. By crossing out multiples, we eliminate all composite numbers, leaving only primes.

**Question 8:** How far do you need to go before you can stop checking?

You only need to check up to the square root of your maximum number. Why? Because any composite number N has at least one prime factor less than or equal to √N.

For finding primes up to 100, you only need to check 2, 3, 5, 7 (since 11² = 121 > 100).

## The Infinity of Primes

Are there infinitely many primes, or do they eventually stop?

Here's a proof by contradiction (one of the most elegant in mathematics):

**Assume primes are finite.** Let's say the complete list is: p₁, p₂, p₃, ..., pₙ

**Construct a new number:** N = (p₁ × p₂ × p₃ × ... × pₙ) + 1

**Question 9:** What happens when you try to divide N by any of the primes on your list?

N divided by any prime pᵢ leaves remainder 1. So N is not divisible by any prime on your "complete" list.

This means either:
- N itself is prime (but it's not on your list)
- N has a prime factor not on your list

Either way, your list was incomplete. Contradiction.

**Therefore:** Primes are infinite.

**Question 10:** Does this proof tell you how to find large primes efficiently?

No. The proof establishes existence, not method. This is important: Proving something exists does not give you an algorithm to find it.

## The Prime Number Theorem

Primes become less frequent as numbers grow larger, but follow a predictable pattern.

Approximately, the number of primes less than N is:

N / ln(N)

where ln is the natural logarithm.

**Question 11:** What does this tell you about how spread out primes become?

For small numbers (like 1-100), primes are relatively common. For huge numbers (like 1 billion to 1 billion + 100), primes are rare.

But they never stop entirely.

## Twin Primes

Some primes come in pairs, separated by 2:
- (3, 5)
- (5, 7)
- (11, 13)
- (17, 19)
- (29, 31)

**Question 12:** Do twin primes continue forever, or do they eventually stop?

This is the Twin Prime Conjecture. As of 2025, it remains unproven. We don't know if twin primes are infinite, even though we strongly suspect they are.

**Question 13:** Why is it harder to prove properties about prime patterns than about primes themselves?

Primes themselves have a clear definition. Prime patterns involve relationships between primes, which adds complexity. We can find patterns empirically, but proving they continue forever requires deeper mathematical machinery.

## The Irregularity of Primes

Plot the primes on a number line: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

**Question 14:** Do you see a pattern in the gaps between consecutive primes?

The gaps are irregular: 1, 2, 2, 4, 2, 4, 2, 4, 6, 2...

Sometimes consecutive primes are close (like 11 and 13). Sometimes far apart (like 23 and 29).

**Question 15:** Can the gap between consecutive primes be arbitrarily large?

Yes. For any number N, you can construct a sequence of N consecutive composite numbers:

(N+1)! + 2, (N+1)! + 3, (N+1)! + 4, ..., (N+1)! + (N+1)

Each is composite (divisible by 2, 3, 4, ..., N+1 respectively).

So prime gaps can be as large as you want. Yet primes never stop entirely.

## Why Primes Matter for Computation

Prime factorization is easy for small numbers. For 30, you can find 2 × 3 × 5 quickly.

**Question 16:** Is factorization easy for large numbers?

Try factoring: 91

(Pause and try before continuing)

91 = 7 × 13

Now try: 8,051

(This will take longer)

8,051 = 83 × 97

**Question 17:** How did you approach factoring 8,051? Did you have a better strategy than checking every prime up to √8,051?

For humans, trial division is tedious. For computers, it's faster but still fundamentally slow for huge numbers.

**Question 18:** If I give you two 100-digit prime numbers and ask you to multiply them, is that easier or harder than taking their 200-digit product and factoring it back into the original primes?

Multiplication is fast (even for 100-digit numbers).
Factorization is slow (exponentially slower as numbers grow).

This asymmetry is the foundation of modern cryptography.

## The One-Way Door

Imagine a door that's easy to walk through in one direction but requires massive effort to walk through backward. That's prime factorization:

**Forward (multiplication):**
7,919 × 7,927 = 62,785,313
(Takes seconds with a calculator)

**Backward (factorization):**
What are the prime factors of 62,785,313?
(Takes much longer without knowing it's 7,919 × 7,927)

**Question 19:** Why is factorization fundamentally harder than multiplication?

Multiplication is a direct process: apply an algorithm, get answer.
Factorization is a search process: try possibilities until you find one that works.

## Primality Testing vs Factorization

Interestingly, determining whether a number is prime is easier than factoring it.

**Question 20:** How can it be easier to verify "this number has no factors" than to find what those factors are?

Because primality tests can use probabilistic methods that don't require checking all possible factors. The AKS algorithm (2002) can prove primality in polynomial time, while factorization remains exponential.

## The RSA Connection

Your internet security (HTTPS) relies on this:
1. Generate two large random primes (p and q)
2. Multiply them: N = p × q
3. Publish N publicly
4. Keep p and q secret

**Question 21:** Why is it safe to publish N if anyone can theoretically factor it?

Because "theoretically possible" and "practically feasible" are different. Factoring a 2048-bit number (617 digits) would take current computers longer than the age of the universe.

The security isn't mathematical impossibility. It's computational impracticality.

## Checkpoint Question

**Why are prime numbers considered the "atoms" of arithmetic? What property makes them fundamental building blocks, and why can't you decompose them further?**

Your answer should address:
- The definition of primality
- Unique prime factorization
- The distinction between "cannot factor" vs "have not yet factored"
- Why primes are different from composite numbers structurally

If you cannot articulate this, revisit the module. Understanding primes as irreducible building blocks is essential for grasping computational cost in Module 05.

## What This Module Established

Prime numbers are integers that resist division. Every other integer can be uniquely decomposed into primes. This makes primes the structural foundation of arithmetic.

Key insight: Some processes (multiplication) are easy forward, hard backward (factorization). This asymmetry has practical consequences for security and computation.

Module 05 explores why computational cost matters: not all problems are equally solvable, even when they're mathematically equivalent.
