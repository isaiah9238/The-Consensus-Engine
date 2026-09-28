# STAGE DIRECTIONS & PRODUCTION DESIGN
## Accompanying "The Consensus Engine"

---

### 1. Spatial Architecture & The Floor Grid
The stage is an abstract representation of an active execution graph.

* **The Ground Graph:**
  * Painted directly onto the matte black floor in high-contrast luminescent paint is a directed cyclic graph with hard right angles.
  * Node circles are distinctly delineated:
    * `[RESEARCH]` — Stage Right. Surrounded by stacks of discarded whitepapers and benchmark sheets.
    * `[DEV]` — Downstage Right-Center. Dominated by a sparse standing desk and a single phosphor-green monitor glow.
    * `[VERIFY]` — Downstage Left-Center. A stark, cold checkpoint demarcated by industrial hazard stripes.
    * `[ADJUDICATE]` — Stage Left. Elevated on a shallow riser draped in purple velvet; ornate and cluttered.
    * `[HUMAN_INTERRUPT]` — Upstage Center. An isolated raised platform enclosed in yellow industrial scaffolding, lit only when a breakpoint triggers.
  * Thin LED light ribbons run along the painted graph edges between nodes, firing pulses of white light to indicate payload transfers and state transitions.

* **The Overhead Rig:**
  * Hanging center-overhead is a segmented digital LED display board with two live metrics:
    * **`TOKEN SPEND:`** Updates in real-time. Starts at `00,000`, creeps slowly during deterministic steps, and races exponentially during `MODEL_ARBITER` monologues.
    * **`THREAD LATENCY:`** Monospaced millisecond counter that ticks continuously throughout the performance.

---

### 2. Lighting Design & Color States
Lighting dictates which computational regime governs the thread at any given moment:

* **Normal Cycle (Ambient):** Dim blue-gray wash across the floor. Edges pulse calmly.
* **Deterministic Veto (`RANK_VETO`):** A sudden, violent strobe of cold monochromatic red directly over `[VERIFY]`. All ambient fill cuts to zero for three seconds.
* **Adjudication (`MODEL_ADJUDICATION`):** A warm, diffuse, cinematic amber wash slowly floods Stage Left. The light feels expensive, hazy, and thick with theatrical atmosphere.
* **Checkpoint Freeze (`HUMAN_INTERRUPT`):**
  * The instant `MemorySaver.save_state` triggers, every light instantly cuts except a single, pale 40W tungsten downlight directly over `[HUMAN_INTERRUPT]`.
  * The background LED counters halt with an audible mechanical relay click.
* **Recovery & Resumption:** The tungsten bulb cuts; a crisp daylight-balanced flood sweeps down from upstage to downstage as the graph transitions to `END`.

---

### 3. Audio & Mechanical Cues

* **The Edge Traversal:** A dry, high-speed acoustic relay click whenever `STATE_GRAPH` announces an edge movement.
* **The Static Gate:**
  * *Failure:* A harsh, industrial buzzer (pure low-frequency square wave, 120 Hz).
  * *Success:* A clean, high-register glass chime (indicating all 42 tests passed).
* **The Freeze:** The total cut of all HVAC/ambient hum, replaced by the faint, high-frequency coil whine of the frozen terminal monitor.
* **Keyboard Action:** The Human Operator’s keystrokes must sound loud, tactile, and heavy—like vintage buckling-spring keys echoing in an empty warehouse.

---

### 4. Acting Notes & Physicality

* **STATE_GRAPH:**
  * Never blinks during lines. 
  * Movements are strictly orthogonal (turns only at 90-degree angles). 
  * Speaks in an unhurried, flat cadenced monotone, like an automated subway announcer.
* **RESEARCH_AGENT:**
  * High-frequency nervous energy. 
  * Constantly dropping and retrieving printouts; eyes darting across imaginary documentation tabs.
* **DEVELOPER_AGENT:**
  * Hunched posture, rapid shallow breathing. 
  * Hands constantly twitching in typing motions, physically reacting to errors as though dodging falling bricks.
* **STATIC_VERIFIER:**
  * Rigid, spine locked. 
  * Never steps off the `[VERIFY]` node. 
  * Delivers rejections not with malice, but with complete, robotic indifference.
* **MODEL_ARBITER:**
  * Fluid, sweeping, classical theatrical gestures. 
  * Paces slowly, luxuriating in words, completely oblivious to the panic of the agents watching the token counter.
* **THE HUMAN OPERATOR:**
  * Shuffling gait, heavy footsteps. 
  * The only character who treats the glowing technical apparatus as ordinary, tired office equipment.