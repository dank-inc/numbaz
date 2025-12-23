# Numbaz - Computational Universe Generator

> A prime-based PRNG designed to generate reality-level complexity through computational irreducibility

## Project Vision

Numbaz is not just a math library. It is an exploration of the fundamental question: **Can we create a deterministic computational system with simple rules that generates complexity indistinguishable from reality itself?**

This package aims to demonstrate understanding of:
- Computational irreducibility
- Prime number properties and distribution
- Emergence and complexity theory
- The relationship between determinism and unpredictability
- How simple rules can create unbounded complexity

**See `prime-plan.md` for the complete implementation roadmap and philosophical foundation.**

## Core Directive

Create a deterministic random number generator with the unpredictability of prime numbers, capable of producing emergent complexity at the level of our own reality.

### The Key Insight

Prime numbers possess **computational irreducibility** - there's no shortcut to find the next prime except to compute it. By using prime generation as our core operation, we inherit this computational depth. Each step of our PRNG requires finding the next prime, ensuring the system cannot be predicted without computing it.

## Project Structure

```
numbaz/
├── src/
│   ├── prng/                  # Prime-based PRNG core
│   │   ├── prime.ts          # Miller-Rabin primality testing
│   │   ├── seed.ts           # Seed expansion via prime generation
│   │   ├── mixer.ts          # Non-linear mixing functions
│   │   └── generator.ts      # Main PRNG implementation
│   ├── metrics/              # Complexity measurement
│   │   ├── kolmogorov.ts    # Complexity approximation
│   │   ├── lyapunov.ts      # Chaos measurement
│   │   ├── entropy.ts       # Information theory metrics
│   │   └── emergence.ts     # Pattern detection
│   ├── spatial/              # Multi-dimensional systems
│   │   ├── grid.ts          # 2D/3D grid structures
│   │   ├── cell.ts          # Cell state management
│   │   └── neighbors.ts     # Interaction rules
│   └── emergence/            # Meta-level systems
│       ├── metarules.ts     # Rules that generate rules
│       └── evolution.ts     # Self-modifying computation
├── tests/                    # Comprehensive test suite
├── prime-plan.md            # Implementation roadmap
├── claude.md                # This file
└── package.json
```

## Implementation Phases

### Phase 1: Computationally Deep PRNG (Current Focus)

Build a PRNG foundation with maximum computational irreducibility.

**Key Components:**
- Miller-Rabin primality test
- Seed expansion via prime generation
- Non-linear state mixing
- Avalanche properties (single bit change → complete state change)

**Success Metrics:**
- Statistical randomness tests pass
- High computational cost per iteration (feature, not bug)
- State cannot be reverse-engineered
- Long period before cycling

**Files:**
- `src/prng/prime.ts` - Primality testing
- `src/prng/seed.ts` - Seed → prime sequence
- `src/prng/mixer.ts` - State transformation
- `src/prng/generator.ts` - Public API

### Phase 2: Complexity Metrics

Implement tools to measure and validate reality-level complexity.

**Key Components:**
- Kolmogorov complexity approximation (compression testing)
- Lyapunov exponent (sensitivity to initial conditions)
- Entropy measurement (information density)
- Pattern detection (emergence identification)

**Success Metrics:**
- Output is incompressible (complexity ratio ≈ 1.0)
- Positive Lyapunov exponent (chaotic but not random)
- High entropy (information-rich)
- Emergent patterns detected

**Files:**
- `src/metrics/kolmogorov.ts`
- `src/metrics/lyapunov.ts`
- `src/metrics/entropy.ts`
- `src/metrics/emergence.ts`

### Phase 3: Spatial Extension

Add multi-dimensional state space for emergent behavior.

**Key Components:**
- 2D/3D grid structures
- Cell state management
- Neighbor interaction rules
- PRNG-driven field fluctuations

**Success Metrics:**
- Stable structures emerge
- Patterns propagate through space
- Non-trivial interactions occur
- System exhibits life-like behavior

**Files:**
- `src/spatial/grid.ts`
- `src/spatial/cell.ts`
- `src/spatial/neighbors.ts`

### Phase 4: Emergence Layer

Let rules emerge from the PRNG itself - meta-computation.

**Key Components:**
- Meta-rules (rules that generate rules)
- Self-modification capabilities
- Feedback loops between levels
- Novelty detection

**Success Metrics:**
- Rules evolve over time
- Unexpected behaviors emerge
- System demonstrates creativity
- Complexity increases without external input

**Files:**
- `src/emergence/metarules.ts`
- `src/emergence/evolution.ts`

## Development Philosophy

### 1. Educational Value

This package is for demonstrating understanding, not just building functionality. Code should:
- Include explanatory comments about *why* not just *what*
- Reference mathematical principles and their implications
- Show the journey of discovery, not just the destination
- Explain trade-offs and design decisions

### 2. Computational Depth Over Performance

Unlike typical software where performance optimization is paramount, here **computational cost creates value**. The harder it is to compute the next state, the more irreducible the system becomes.

Don't optimize away the complexity - that's the point.

### 3. Measure Everything

Every claim about complexity, randomness, or emergence must be quantitatively validated. Implement metrics first, then build systems to achieve target metric values.

### 4. Iterative Validation

Each phase must be validated before proceeding to the next:
- Phase 1 → Passes statistical randomness tests
- Phase 2 → Achieves target complexity metrics
- Phase 3 → Demonstrates emergent spatial patterns
- Phase 4 → Shows self-organization and novelty

### 5. Think in Systems

This isn't a collection of functions - it's a computational ecosystem. Consider:
- How components interact
- What feedback loops exist
- Where emergence might occur
- How complexity cascades through levels

## Key Technologies

- **TypeScript**: Type safety for complex systems
- **BigInt**: Handle large prime numbers
- **Jest**: Comprehensive testing
- **Compression Libraries**: Kolmogorov complexity approximation
- **Visualization Tools**: Observe emergent behavior

## Success Criteria

The project succeeds when:

1. **Unpredictability**: Output cannot be predicted without running the algorithm
2. **Emergence**: Patterns appear that weren't explicitly programmed
3. **Edge of Chaos**: System is neither too ordered nor too random
4. **Incompressibility**: Output has maximum Kolmogorov complexity
5. **Sensitivity**: Small seed changes create vastly different outputs
6. **Computational Cost**: No shortcuts exist to skip ahead in time

## Mathematical Foundations

### Why Primes?

Prime numbers are the foundation because they exhibit:

1. **Computational Irreducibility**: No formula for the nth prime - must compute sequentially
2. **Structured Irregularity**: Deterministic sequence with random-looking gaps
3. **Mathematical Depth**: Fundamental to number theory, cryptography, and complexity
4. **Unpredictability**: Gaps between primes appear random despite being fully determined

### Number-Theoretic Properties

The system leverages:
- **Prime Number Theorem**: Distribution of primes follows deep patterns
- **Modular Arithmetic**: Prime modulos ensure full-period cycles
- **Coprimality**: Prime relationships create mixing properties
- **Computational Complexity**: Prime testing/generation has no shortcuts

## Testing Strategy

### Unit Tests
- Individual function correctness
- Edge case handling
- Mathematical accuracy
- Error conditions

### Integration Tests
- Component interactions
- State propagation
- Complexity metrics
- Emergence detection

### Property-Based Tests
- Statistical randomness (chi-square, runs test)
- Complexity measures (Kolmogorov, entropy)
- Chaos metrics (Lyapunov exponents)
- Distribution properties

### Long-Running Tests
- Multi-million step simulations
- Pattern emergence over time
- System stability
- Novelty generation

## Documentation Requirements

Every major function/class should document:

1. **Purpose**: What it does
2. **Mathematical Basis**: Why it works this way
3. **Complexity**: Computational cost (as a feature)
4. **Parameters**: What they control and why
5. **Returns**: What it produces and its properties
6. **Example**: How to use it

## Contributing to This Project

When adding features:

1. **Understand the Math**: Research the mathematical principles first
2. **Implement with Explanation**: Code should teach, not just execute
3. **Measure Complexity**: Validate that changes increase/maintain computational depth
4. **Test Thoroughly**: Unit tests + complexity metrics
5. **Document the Journey**: Explain discoveries and design choices

## Philosophical Context

This project explores whether:
- Deterministic rules can produce unpredictable outcomes
- Simple algorithms can generate unbounded complexity
- Computation can exhibit properties indistinguishable from reality
- Emergence can arise from pure mathematics

We're not just building software - we're investigating the computational nature of reality itself.

## Resources

### Mathematical Background
- Prime Number Theorem
- Computational Complexity Theory
- Chaos Theory and Dynamical Systems
- Information Theory
- Kolmogorov Complexity

### Computational Inspiration
- Wolfram's "A New Kind of Science"
- Conway's Game of Life
- Rule 110 Cellular Automaton
- Langton's Ant
- Digital Physics

### Cryptographic Relevance
- Miller-Rabin Primality Test
- RSA and Prime Factorization
- Cryptographically Secure PRNGs
- Computational Hardness Assumptions

## Current Status

**Phase**: 1 (Foundation)
**Focus**: Building the prime-based PRNG core

**Next Steps**:
1. Implement Miller-Rabin primality testing
2. Create seed expansion mechanism
3. Build non-linear mixing functions
4. Add avalanche property testing
5. Validate statistical randomness

See `prime-plan.md` for detailed roadmap and milestones.

---

*"The most incomprehensible thing about the universe is that it is comprehensible." - Albert Einstein*

Perhaps our universe is an incompressible computation. This project attempts to create such a system and observe what emerges.
