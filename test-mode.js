/**
 * Test Mode for Algorithms & Programming Tutorials (test-mode.js)
 * Self-contained, responsive, glassmorphic gamified learning dashboard.
 * Supports:
 *  - 🎯 Concept Quiz (MCQ)
 *  - ⚡ Complexity Speedrun (Time/Space Complexity)
 *  - 🧩 Code Completion (Fill-in-the-blank)
 * Features:
 *  - Dynamic page parsing (scrapes complexity tables and code snippets automatically)
 *  - Rich pre-packaged interview-style question banks
 *  - LocalStorage state (streaks, high scores, progress)
 *  - Pure HTML5 Canvas Confetti animation (no external assets)
 *  - Web Audio API Sound Synthesis (no external assets)
 */

(function () {
    // ----------------------------------------------------
    // 1. DATASETS & QUESTION BANKS
    // ----------------------------------------------------
    const QUIZ_DATA = {
        'sliding_window': [
            {
                q: "When is the Sliding Window pattern typically preferred over a naive nested loop approach?",
                o: [
                    "When checking all possible contiguous subarrays or substrings of a specific or variable length",
                    "When working with non-contiguous subsets or permutations of elements",
                    "When elements must be sorted and compared pairwise across the entire list",
                    "When solving tree traversal or hierarchical network problems"
                ],
                a: 0,
                ex: "Sliding Window is highly optimized for contiguous blocks (subarrays or substrings) because it allows updating the window's state incrementally (O(1) average time per slide) instead of recalculating from scratch (O(k) or O(N^2))."
            },
            {
                q: "For a variable-size sliding window, what condition causes the left pointer to advance?",
                o: [
                    "When the current window is invalid or has met/exceeded the target condition",
                    "When the right pointer reaches the end of the array",
                    "When the right pointer encounters a duplicate character",
                    "When the time limit of the current slide expires"
                ],
                a: 0,
                ex: "In variable-size window problems (like Minimum Window Substring), we expand the right pointer to find a valid state, then contract the left pointer as long as the condition remains valid to find the minimum/optimal window size."
            },
            {
                q: "What is the worst-case space complexity of a sliding window algorithm using a hash map to track character frequencies?",
                o: [
                    "O(K) or O(1) where K is the size of the alphabet",
                    "O(N) where N is the total elements in the array",
                    "O(N log N) due to hashing collisions",
                    "O(N^2) because of nested index tracking"
                ],
                a: 0,
                ex: "The space complexity is determined by the size of the character frequency map. Since there are a fixed number of unique characters (e.g., 26 for English letters, 128 or 256 for standard ASCII), the space complexity is O(K), which simplifies to O(1) if K is bounded."
            }
        ],
        'two_pointers': [
            {
                q: "In what state must the array be to successfully apply the classic two-pointer approach (e.g., target sum)?",
                o: [
                    "Sorted (ascending or descending order)",
                    "Fully shuffled to guarantee uniform access",
                    "Homogeneous (all elements must have the same sign)",
                    "Partially populated with null values at index boundaries"
                ],
                a: 0,
                ex: "The classic two-pointer technique for finding a target sum requires a sorted array. This allows us to move pointers inward: increment the left pointer to increase the sum, or decrement the right pointer to decrease it."
            },
            {
                q: "What is the time complexity of the Floyd's Cycle Detection (Tortoise and Hare) algorithm?",
                o: [
                    "O(N) time complexity",
                    "O(N log N) time complexity",
                    "O(1) time complexity",
                    "O(N^2) time complexity"
                ],
                a: 0,
                ex: "Floyd's Cycle Finding algorithm runs in O(N) time because the fast pointer (moving 2 steps) and slow pointer (moving 1 step) will meet inside the cycle of size C in at most N steps."
            }
        ],
        'numpy': [
            {
                q: "What does NumPy's 'broadcasting' do?",
                o: [
                    "Allows arithmetic operations on arrays of different shapes without copying data",
                    "Distributes array computations across multiple CPU cores in parallel",
                    "Converts multi-dimensional arrays into flat 1D views",
                    "Performs fast serialization of arrays to binary files on disk"
                ],
                a: 0,
                ex: "Broadcasting automatically stretches compatible dimensions of arrays (virtually, without duplicating memory) so they can participate in element-wise operations together."
            },
            {
                q: "Under what condition are two dimensions compatible for broadcasting?",
                o: [
                    "They are equal, or one of them is 1",
                    "They are both prime numbers or multiples of 2",
                    "Their sum is equal to the total rank (ndim) of the target array",
                    "One dimension is exactly double the other dimension"
                ],
                a: 0,
                ex: " Numpy aligns dimensions starting from the rightmost (trailing) axis. Two dimensions are compatible if they are equal, or if one of them is 1."
            },
            {
                q: "What is the difference between `a.ravel()` and `a.flatten()` in NumPy?",
                o: [
                    "`ravel()` returns a view when possible; `flatten()` always returns a copy",
                    "`ravel()` always returns a copy; `flatten()` returns an in-place reference",
                    "`ravel()` only works on 2D arrays; `flatten()` works on any N-dimensional array",
                    "`ravel()` is slower because it allocates memory; `flatten()` is instantaneous"
                ],
                a: 0,
                ex: "`ravel()` returns a contiguous flattened view if possible, which shares the underlying buffer. `flatten()` always creates a brand new copy of the data, consuming more memory."
            }
        ],
        'pytorch': [
            {
                q: "Why is tracking gradients manually in deep learning frameworks obsolete?",
                o: [
                    "PyTorch uses Autograd to dynamically build a directed acyclic graph during the forward pass and perform backpropagation automatically",
                    "Stochastic gradient descent operates perfectly without any gradient tracking",
                    "GPUs perform gradient calculations at a hardware level without software layers",
                    "Weight initialization techniques make active optimization gradients unnecessary"
                ],
                a: 0,
                ex: "PyTorch's Autograd engine records all operations performed on tensors that have `requires_grad=True`, building a dynamic computation graph. Calling `.backward()` computes the gradients of these variables automatically."
            },
            {
                q: "What does the `loss.backward()` method do in PyTorch?",
                o: [
                    "Computes the gradient of the loss with respect to all leaf nodes (tensors) in the computation graph",
                    "Resets all parameters and optimization weights back to random initialization values",
                    "Updates parameter weights by subtracting learning rate times the gradient",
                    "Reverses the neural network's layers for inference mode"
                ],
                a: 0,
                ex: "`loss.backward()` computes gradients using backpropagation. To actually update the weights using those gradients, you call `optimizer.step()`."
            },
            {
                q: "What is the purpose of `torch.no_grad()`?",
                o: [
                    "Disables gradient calculation, reducing memory consumption and speeding up calculations during inference/evaluation",
                    "Forces the model to calculate gradients strictly on the CPU instead of GPU",
                    "Filters out NaN or infinite gradient errors from backpropagation logs",
                    "Prevents the optimizer from updating specific layers in a frozen network"
                ],
                a: 0,
                ex: "`with torch.no_grad():` is a context manager that disables gradient tracking. This is highly recommended for evaluation and validation loops because it reduces memory usage and speeds up model forward passes."
            }
        ],
        'system_design': [
            {
                q: "What is a major architectural difference between single-agent systems and multi-agent routing systems?",
                o: [
                    "Multi-agent architectures decompose complex, monolithic tasks into specialized, cooperative nodes with distinct instructions, tools, and states",
                    "Single-agent systems are always slower because they cannot run asynchronous calls",
                    "Multi-agent networks store their persistent state entirely inside local database instances rather than in-memory context",
                    "Single-agent systems rely exclusively on fine-tuned transformer weights, whereas multi-agent setups do not"
                ],
                a: 0,
                ex: "Multi-agent systems break down a large, fragile prompt/task into small, specialized agents. Each agent has narrow context, dedicated tools, and specific instructions, increasing success rates and simplifying debugging."
            },
            {
                q: "How does the 'ReAct' (Reasoning and Acting) prompting framework work in AI agent design?",
                o: [
                    "It iterates between a 'Thought' phase (analyzing state) and an 'Action' phase (calling a tool or querying an API) in a loop",
                    "It converts user natural language directly into database SQL commands in a single pass",
                    "It trains the model weights iteratively in real-time as users interact with the system",
                    "It strictly separates coding agents from logical planning agents"
                ],
                a: 0,
                ex: "ReAct prompts the LLM to generate both reasoning traces ('Thought') and task-specific actions ('Action'). The agent executes the action, receives an 'Observation' from the environment, and repeats the loop until it achieves the goal."
            }
        ],
        'python_scale': [
            {
                q: "What is the Global Interpreter Lock (GIL) in Python (CPython) and how does it affect concurrency?",
                o: [
                    "A mutex that prevents multiple native threads from executing Python bytecodes at once, making CPU-bound multi-threading ineffective",
                    "A security layer that blocks unauthorized socket connections in async servers",
                    "An automatic garbage collection system that runs exclusively when memory limits are exceeded",
                    "A compiler lock that speeds up single-threaded mathematical computations"
                ],
                a: 0,
                ex: "The GIL ensures only one thread executes Python bytecode at a time. Therefore, multi-threading is great for I/O-bound tasks (network/file access), but for CPU-bound tasks (computations), you must use multi-processing or C extensions."
            },
            {
                q: "Why is `asyncio` highly scalable for network-heavy Python services compared to traditional multi-threading?",
                o: [
                    "It uses single-threaded cooperative multitasking with an event loop, eliminating context switching overhead of operating system threads",
                    "It bypasses the CPython GIL entirely, allowing full parallel CPU scaling",
                    "It compiles Python code into optimized native machine instructions at runtime",
                    "It automatically creates redundant network channels to prevent connection packet drops"
                ],
                a: 0,
                ex: "`asyncio` uses an event loop to run cooperative tasks. When a task awaits an I/O operation, it yields control back to the loop, letting other tasks execute. This allows a single process to handle thousands of concurrent open sockets efficiently."
            }
        ],
        'data_pipelines': [
            {
                q: "In PySpark, what is the difference between a Transformation and an Action?",
                o: [
                    "Transformations are lazy and only build a logical execution plan (DAG); Actions trigger the actual execution of computations",
                    "Transformations instantly execute calculations; Actions are cached in memory for later lookup",
                    "Transformations modify the schema on disk; Actions modify the values in memory",
                    "Transformations only run on CPU nodes; Actions run exclusively on GPU nodes"
                ],
                a: 0,
                ex: "PySpark is lazily evaluated. Transformations (like `.filter()` or `.select()`) are added to a Directed Acyclic Graph (DAG) without running them. An Action (like `.count()` or `.collect()`) forces Spark to compile and execute the DAG across the cluster."
            },
            {
                q: "Why is calling `.collect()` on a large Spark DataFrame in production considered dangerous?",
                o: [
                    "It pulls all distributed data into the driver node's single memory space, potentially causing an Out-Of-Memory (OOM) crash",
                    "It locks the entire distributed cluster, preventing other scheduled pipelines from running",
                    "It modifies the raw source files on disk, making operations non-idempotent",
                    "It forces the DataFrame to lose its schema partitions and index maps"
                ],
                a: 0,
                ex: "`.collect()` retrieves all data from the worker partitions across the cluster and sends it to the central driver node. If the dataset is larger than the driver's RAM, the driver process will crash with an OOM error. Use `.take(n)` or write results to a storage layer instead."
            }
        ],
        'transformers': [
            {
                q: "What is the primary formula for scaled dot-product attention in the original Transformer architecture?",
                o: [
                    "softmax(Q K^T / sqrt(d_k)) V",
                    "sigmoid(Q K^T) * V",
                    "tanh(Q K^T * d_k) + V",
                    "softmax(Q V^T / d_k) K"
                ],
                a: 0,
                ex: "Scaled dot-product attention calculates similarity scores between Queries (Q) and Keys (K), divides by the square root of Key dimension (d_k) to prevent vanishing gradients in softmax, and multiplies by Values (V) to aggregate context."
            },
            {
                q: "What is the difference between BERT and GPT architectural styles?",
                o: [
                    "BERT is an encoder-only model using bi-directional attention; GPT is a decoder-only model using causal (masked) attention",
                    "BERT is a sequence-to-sequence model; GPT only processes single inputs at a time",
                    "BERT does not use positional embeddings, whereas GPT relies heavily on them",
                    "BERT uses convolutional blocks; GPT uses pure recurrent layers"
                ],
                a: 0,
                ex: "BERT (Bidirectional Encoder Representations from Transformers) attends to both left and right contexts, making it perfect for understanding/classification. GPT (Generative Pre-trained Transformer) masks future tokens so attention only flows forward, making it perfect for auto-regressive generation."
            }
        ],
        'sql': [
            {
                q: "How does the `ROW_NUMBER()` window function differ from the `RANK()` and `DENSE_RANK()` window functions?",
                o: [
                    "`ROW_NUMBER()` assigns sequential unique integers; `RANK()` leaves gaps on duplicates; `DENSE_RANK()` does not leave gaps",
                    "`ROW_NUMBER()` sorts elements descending; `RANK()` sorts ascending; `DENSE_RANK()` sorts randomly",
                    "`ROW_NUMBER()` requires a `GROUP BY` clause; `RANK()` and `DENSE_RANK()` require an `ORDER BY` clause",
                    "`ROW_NUMBER()` operates across table partitions; `RANK()` and `DENSE_RANK()` only operate within one partition"
                ],
                a: 0,
                ex: "For duplicate values, `ROW_NUMBER()` still assigns different consecutive numbers (e.g., 1, 2, 3). `RANK()` assigns the same rank but skips values (e.g., 1, 2, 2, 4). `DENSE_RANK()` assigns the same rank without skipping (e.g., 1, 2, 2, 3)."
            },
            {
                q: "In what order does a SQL query logically execute (regardless of how database engines optimize it under the hood)?",
                o: [
                    "FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT",
                    "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT",
                    "FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT",
                    "LIMIT → SELECT → FROM → WHERE → GROUP BY → ORDER BY"
                ],
                a: 0,
                ex: "The logical processing order of SQL begins with identifying the tables (`FROM`, `JOIN`), filtering rows (`WHERE`), grouping (`GROUP BY`), filtering groups (`HAVING`), evaluating return expressions (`SELECT`), ordering results (`ORDER BY`), and finally slicing (`LIMIT`)."
            }
        ]
    };

    // Mapping category titles to standard keywords
    const CATEGORIES = {
        'sliding_window': 'Sliding Window Pattern',
        'two_pointers': 'Two Pointers Pattern',
        'numpy': 'NumPy & Arrays',
        'pytorch': 'PyTorch & Autograd',
        'system_design': 'System Design & Agents',
        'python_scale': 'Python at Scale',
        'data_pipelines': 'Data Pipelines & Spark',
        'transformers': 'Transformers Architectures',
        'sql': 'SQL Window Functions'
    };

    // ----------------------------------------------------
    // 2. AUDIO FEEDBACK SYSTEM (Zero-dependency Web Audio API)
    // ----------------------------------------------------
    const AudioEngine = {
        ctx: null,

        init() {
            if (this.ctx) return;
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    this.ctx = new AudioContextClass();
                }
            } catch (e) {
                console.warn("Web Audio API not supported", e);
            }
        },

        playTone(freq, type, duration, delay = 0, gainValue = 0.1) {
            this.init();
            if (!this.ctx) return;

            // Resume context if suspended (common browser security policy)
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }

            setTimeout(() => {
                try {
                    const osc = this.ctx.createOscillator();
                    const gainNode = this.ctx.createGain();
                    
                    osc.type = type;
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                    
                    gainNode.gain.setValueAtTime(gainValue, this.ctx.currentTime);
                    // Smooth decay
                    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

                    osc.connect(gainNode);
                    gainNode.connect(this.ctx.destination);

                    osc.start();
                    osc.stop(this.ctx.currentTime + duration);
                } catch (e) {
                    // Fail silently
                }
            }, delay * 1000);
        },

        playClick() {
            this.playTone(800, 'triangle', 0.05, 0, 0.1);
        },

        playCorrect() {
            this.playTone(523.25, 'sine', 0.15, 0, 0.15); // C5
            this.playTone(659.25, 'sine', 0.15, 0.06, 0.15); // E5
            this.playTone(783.99, 'sine', 0.15, 0.12, 0.15); // G5
            this.playTone(1046.50, 'sine', 0.3, 0.18, 0.2); // C6
        },

        playIncorrect() {
            this.playTone(220, 'sawtooth', 0.12, 0, 0.15); // A3
            this.playTone(147, 'sawtooth', 0.25, 0.08, 0.15); // D3
        },

        playComplete() {
            const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4, E4, G4, C5, E5, G5, C6
            notes.forEach((freq, i) => {
                this.playTone(freq, 'sine', 0.2, i * 0.08, 0.12);
            });
            // Final burst
            this.playTone(1318.51, 'sine', 0.6, notes.length * 0.08, 0.2); // E6
        }
    };

    // ----------------------------------------------------
    // 3. CANVAS CONFETTI SYSTEM (Pure HTML5 Canvas)
    // ----------------------------------------------------
    const Confetti = {
        canvas: null,
        ctx: null,
        particles: [],
        animationFrame: null,

        createCanvas() {
            if (this.canvas) return;
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'test-mode-confetti';
            this.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999;pointer-events:none;';
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');
            
            window.addEventListener('resize', () => this.resizeCanvas());
            this.resizeCanvas();
        },

        resizeCanvas() {
            if (this.canvas) {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
        },

        burst() {
            this.createCanvas();
            this.resizeCanvas();
            this.particles = [];
            
            const colors = ['#f43f5e', '#3b82f6', '#10b981', '#eab308', '#a855f7', '#ff7849'];
            // Create 150 particles
            for (let i = 0; i < 150; i++) {
                this.particles.push({
                    x: window.innerWidth / 2,
                    y: window.innerHeight + 10,
                    vx: (Math.random() - 0.5) * 15,
                    vy: -Math.random() * 20 - 5,
                    size: Math.random() * 8 + 6,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 10,
                    gravity: 0.35,
                    opacity: 1
                });
            }

            if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
            this.animate();
        },

        animate() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let alive = false;

            this.particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.rotation += p.rotationSpeed;
                p.opacity -= 0.008;

                if (p.opacity > 0 && p.y < window.innerHeight + 50) {
                    alive = true;
                    this.ctx.save();
                    this.ctx.translate(p.x, p.y);
                    this.ctx.rotate(p.rotation * Math.PI / 180);
                    this.ctx.fillStyle = p.color;
                    this.ctx.globalAlpha = p.opacity;
                    this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                    this.ctx.restore();
                }
            });

            if (alive) {
                this.animationFrame = requestAnimationFrame(() => this.animate());
            } else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }
    };

    // ----------------------------------------------------
    // 4. STORAGE & STATE MANAGEMENT
    // ----------------------------------------------------
    const State = {
        scores: {}, // Category -> High Score
        streak: 0,
        lastStudyDate: null,

        load() {
            try {
                const storedScores = localStorage.getItem('algos_quiz_scores');
                if (storedScores) this.scores = JSON.parse(storedScores);

                this.streak = parseInt(localStorage.getItem('algos_study_streak') || '0', 10);
                this.lastStudyDate = localStorage.getItem('algos_last_study_date');

                this.updateStreak();
            } catch (e) {
                console.error("Error loading localStorage state", e);
            }
        },

        save() {
            try {
                localStorage.setItem('algos_quiz_scores', JSON.stringify(this.scores));
                localStorage.setItem('algos_study_streak', this.streak.toString());
                localStorage.setItem('algos_last_study_date', this.lastStudyDate || '');
            } catch (e) {
                console.error("Error saving localStorage state", e);
            }
        },

        updateStreak() {
            const todayStr = new Date().toDateString();
            if (this.lastStudyDate === todayStr) {
                // Already studied today
                return;
            }

            if (this.lastStudyDate) {
                const lastDate = new Date(this.lastStudyDate);
                const diffTime = Math.abs(new Date(todayStr) - lastDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    // Consecutive day!
                    this.streak += 1;
                } else if (diffDays > 1) {
                    // Streak broken!
                    this.streak = 1;
                }
            } else {
                // First study session ever!
                this.streak = 1;
            }

            this.lastStudyDate = todayStr;
            this.save();
        },

        setHighScore(category, score) {
            if (!this.scores[category] || score > this.scores[category]) {
                this.scores[category] = score;
                this.save();
                return true; // New high score
            }
            return false;
        }
    };

    // ----------------------------------------------------
    // 5. DYNAMIC DOM PARSER ENGINE
    // ----------------------------------------------------
    const PageParser = {
        detectTopic() {
            // Check page path / title to deduce category
            const pathname = window.location.pathname.toLowerCase();
            const title = document.title.toLowerCase();

            if (pathname.includes('sliding_window') || title.includes('sliding window')) return 'sliding_window';
            if (pathname.includes('two_pointers') || title.includes('two pointer')) return 'two_pointers';
            if (pathname.includes('numpy') || title.includes('numpy')) return 'numpy';
            if (pathname.includes('pytorch') || title.includes('pytorch')) return 'pytorch';
            if (pathname.includes('system_design') || title.includes('system design')) return 'system_design';
            if (pathname.includes('python_robust') || title.includes('robust software')) return 'python_scale';
            if (pathname.includes('data_pipelines') || title.includes('data pipeline')) return 'data_pipelines';
            if (pathname.includes('transformers') || title.includes('transformers')) return 'transformers';
            if (pathname.includes('sql') || title.includes('sql')) return 'sql';

            return null; // Fallback to index dashboard selector
        },

        parseComplexity() {
            const complexityQuestions = [];
            // Target tables in .complexity or general tables
            const tables = document.querySelectorAll('.complexity table, table');
            
            tables.forEach(table => {
                const rows = Array.from(table.querySelectorAll('tr'));
                if (rows.length < 2) return;

                // Find column indices
                const headerCells = Array.from(rows[0].querySelectorAll('th, td')).map(c => c.textContent.trim().toLowerCase());
                const typeIndex = headerCells.findIndex(h => h.includes('type') || h.includes('complexity'));
                const valIndex = headerCells.findIndex(h => h.includes('val') || h.includes('time') || h.includes('space') || h.includes('complexity'));
                const descIndex = headerCells.findIndex(h => h.includes('expl') || h.includes('desc'));

                if (typeIndex !== -1 && valIndex !== -1) {
                    for (let i = 1; i < rows.length; i++) {
                        const cells = Array.from(rows[i].querySelectorAll('td'));
                        if (cells.length > Math.max(typeIndex, valIndex)) {
                            const type = cells[typeIndex].textContent.trim();
                            const value = cells[valIndex].textContent.trim();
                            const expl = descIndex !== -1 && cells[descIndex] ? cells[descIndex].textContent.trim() : "";

                            if (type && value && value.match(/O\(.*\)/)) {
                                complexityQuestions.push({
                                    q: `What is the ${type.toLowerCase()} of this algorithm/operation?`,
                                    o: this.shuffleArray([value, "O(1)", "O(n)", "O(n log n)", "O(n^2)", "O(2^n)"].slice(0, 4)),
                                    a: -1, // Set below dynamically
                                    correctVal: value,
                                    ex: expl || `Standard complexity expectation: ${value}`
                                });
                            }
                        }
                    }
                }
            });

            // Map the correct answer index
            complexityQuestions.forEach(q => {
                q.a = q.o.indexOf(q.correctVal);
                if (q.a === -1) {
                    q.o[3] = q.correctVal;
                    q.a = 3;
                }
            });

            return complexityQuestions;
        },

        parseCodeCompletion() {
            const codeQuestions = [];
            // Target code blocks
            const codeBlocks = document.querySelectorAll('.code-block pre, pre code');
            
            codeBlocks.forEach((block, idx) => {
                const text = block.textContent;
                const lines = text.split('\n');
                
                // Search for interesting lines (e.g. loops, sliding, indexing)
                const candidateLines = [];
                lines.forEach((line, lineIdx) => {
                    const trimmed = line.trim();
                    if (
                        (trimmed.includes('left +=') || trimmed.includes('right +=') || 
                         trimmed.includes('window_sum =') || trimmed.includes('sum(') ||
                         trimmed.includes('char_count[') || trimmed.includes('min_len =') ||
                         trimmed.includes('a + b') || trimmed.includes('np.array(') || 
                         trimmed.includes('loss.backward()') || trimmed.includes('optimizer.step()') ||
                         trimmed.includes('ROW_NUMBER()') || trimmed.includes('PARTITION BY') ||
                         trimmed.includes('axis=')) &&
                        trimmed.length > 8 && !trimmed.startsWith('#') && !trimmed.startsWith('//')
                    ) {
                        candidateLines.push({ text: line, index: lineIdx });
                    }
                });

                if (candidateLines.length > 0) {
                    // Pick a random candidate line from the code block
                    const target = candidateLines[Math.floor(Math.random() * candidateLines.length)];
                    
                    // Construct masked block
                    const maskedLines = [...lines];
                    maskedLines[target.index] = "    # [??? CHOOSE MISSING LINE HERE ???]";
                    const maskedCode = maskedLines.join('\n');

                    // Create plausible wrong options
                    const correctLine = target.text.trim();
                    let wrongOptions = [];
                    
                    if (correctLine.includes('left +=')) {
                        wrongOptions = ["left -= 1", "right += 1", "left = right"];
                    } else if (correctLine.includes('window_sum =')) {
                        wrongOptions = [
                            "window_sum = window_sum + arr[i]",
                            "window_sum = sum(arr[i - k])",
                            "window_sum = window_sum - arr[i] + arr[i - k]"
                        ];
                    } else if (correctLine.includes('loss.backward()')) {
                        wrongOptions = ["optimizer.zero_grad()", "loss.step()", "torch.backward(loss)"];
                    } else if (correctLine.includes('ROW_NUMBER()')) {
                        wrongOptions = ["RANK()", "DENSE_RANK()", "SEQUENCE()"];
                    } else {
                        // Generic fallback modifiers
                        wrongOptions = [
                            correctLine.replace('+', '-'),
                            correctLine.replace('left', 'right'),
                            correctLine.replace('=', '+=')
                        ];
                    }

                    // Ensure unique options
                    wrongOptions = wrongOptions.filter(o => o !== correctLine).slice(0, 3);
                    const options = this.shuffleArray([correctLine, ...wrongOptions]);

                    codeQuestions.push({
                        code: maskedCode,
                        q: `What is the missing line of code (line ${target.index + 1}) to make this algorithm operate correctly?`,
                        o: options,
                        a: options.indexOf(correctLine),
                        ex: "Reviewing the code flow, this statement is necessary to increment pointers or update window states correctly."
                    });
                }
            });

            return codeQuestions.slice(0, 3); // Max 3 dynamic code tasks
        },

        shuffleArray(arr) {
            const a = [...arr];
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }
    };

    // ----------------------------------------------------
    // 6. FLOATING ACTION BUTTON & VIEW OVERLAYS (GLASSMORPHIC STYLES)
    // ----------------------------------------------------
    const Styles = {
        inject() {
            if (document.getElementById('test-mode-styles')) return;
            const style = document.createElement('style');
            style.id = 'test-mode-styles';
            style.textContent = `
                /* CSS variables for neat color palette */
                :root {
                    --tm-glass: rgba(15, 23, 42, 0.75);
                    --tm-card: rgba(30, 41, 59, 0.8);
                    --tm-border: rgba(255, 255, 255, 0.1);
                    --tm-accent: #8b5cf6; /* Violet */
                    --tm-accent-glow: rgba(139, 92, 246, 0.4);
                    --tm-text: #f8fafc;
                    --tm-text-secondary: #94a3b8;
                    --tm-success: #10b981; /* Emerald */
                    --tm-error: #f43f5e; /* Rose */
                }

                /* Floating Action Button (FAB) */
                #test-mode-fab {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    z-index: 99990;
                    padding: 12px 20px;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50px;
                    color: white;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.5), 
                                0 0 0 1px rgba(139, 92, 246, 0.1),
                                inset 0 1px 1px rgba(255, 255, 255, 0.2);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-origin: center;
                    animation: tmPulse 2.5s infinite;
                }

                #test-mode-fab:hover {
                    transform: scale(1.06) translateY(-2px);
                    box-shadow: 0 15px 30px -5px rgba(139, 92, 246, 0.6), 
                                0 0 15px rgba(139, 92, 246, 0.4);
                }

                #test-mode-fab:active {
                    transform: scale(0.96);
                }

                #test-mode-fab svg {
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                }

                /* Streak Fire Indicator on FAB */
                .fab-streak {
                    background: #f97316;
                    color: white;
                    padding: 2px 6px;
                    border-radius: 20px;
                    font-size: 11px;
                    margin-left: 2px;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    font-weight: bold;
                    box-shadow: 0 0 8px #f97316;
                }

                /* Fullscreen Overlay Dialog */
                #test-mode-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 99995;
                    background: var(--tm-glass);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    color: var(--tm-text);
                    box-sizing: border-box;
                }

                #test-mode-modal.active {
                    opacity: 1;
                    pointer-events: auto;
                }

                /* Panel Container */
                #test-mode-panel {
                    width: 90%;
                    max-width: 650px;
                    max-height: 85vh;
                    background: var(--tm-card);
                    border: 1px solid var(--tm-border);
                    border-radius: 24px;
                    padding: 30px;
                    overflow-y: auto;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                                0 0 0 1px rgba(255, 255, 255, 0.05);
                    transform: translateY(20px) scale(0.95);
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: relative;
                }

                #test-mode-modal.active #test-mode-panel {
                    transform: translateY(0) scale(1);
                }

                /* Close Button */
                .tm-close-btn {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--tm-border);
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--tm-text);
                    transition: all 0.2s;
                }

                .tm-close-btn:hover {
                    background: rgba(244, 63, 94, 0.2);
                    color: var(--tm-error);
                    border-color: rgba(244, 63, 94, 0.3);
                }

                /* Dashboard Sections */
                .tm-header {
                    border-bottom: 1px solid var(--tm-border);
                    padding-bottom: 16px;
                }

                .tm-title-group {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .tm-title {
                    font-size: 24px;
                    font-weight: 800;
                    background: linear-gradient(to right, #818cf8, #c084fc);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tm-stats {
                    display: flex;
                    gap: 16px;
                    margin-top: 12px;
                    font-size: 13px;
                }

                .tm-stat-badge {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 4px 10px;
                    border-radius: 20px;
                    border: 1px solid var(--tm-border);
                }

                .tm-stat-val {
                    font-weight: bold;
                    color: #a78bfa;
                }

                /* Mode Selector Card Grid */
                .tm-mode-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }

                @media (max-width: 500px) {
                    .tm-mode-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .tm-mode-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--tm-border);
                    border-radius: 16px;
                    padding: 16px;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    text-align: left;
                }

                .tm-mode-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--tm-accent);
                    box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
                    transform: translateY(-2px);
                }

                .tm-mode-icon {
                    font-size: 24px;
                    margin-bottom: 8px;
                }

                .tm-mode-title {
                    font-weight: 700;
                    font-size: 15px;
                    margin-bottom: 4px;
                }

                .tm-mode-desc {
                    font-size: 12px;
                    color: var(--tm-text-secondary);
                    line-height: 1.4;
                }

                /* Category Selectors */
                .tm-select-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .tm-select-label {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--tm-text-secondary);
                }

                .tm-select {
                    background: #0f172a;
                    border: 1px solid var(--tm-border);
                    border-radius: 12px;
                    padding: 10px 14px;
                    color: white;
                    font-size: 14px;
                    outline: none;
                    cursor: pointer;
                }

                /* Active Quiz Layout */
                .tm-quiz-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .tm-progress-bar-bg {
                    width: 100%;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .tm-progress-bar-fill {
                    height: 100%;
                    background: linear-gradient(to right, #818cf8, #10b981);
                    width: 0%;
                    transition: width 0.3s ease;
                }

                .tm-question-text {
                    font-size: 17px;
                    font-weight: 600;
                    line-height: 1.5;
                }

                .tm-code-pre {
                    background: #090d16;
                    border: 1px solid var(--tm-border);
                    border-radius: 10px;
                    padding: 15px;
                    max-height: 250px;
                    overflow-y: auto;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 12px;
                    color: #cbd5e1;
                    line-height: 1.5;
                    white-space: pre-wrap;
                    word-break: break-all;
                }

                .tm-options-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .tm-option-btn {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--tm-border);
                    border-radius: 12px;
                    padding: 12px 16px;
                    color: var(--tm-text);
                    text-align: left;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                    line-height: 1.4;
                }

                .tm-option-btn:hover {
                    background: rgba(255, 255, 255, 0.07);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                /* Option Button States */
                .tm-option-btn.correct {
                    background: rgba(16, 185, 129, 0.15) !important;
                    border-color: var(--tm-success) !important;
                    color: #34d399 !important;
                    font-weight: 600;
                }

                .tm-option-btn.wrong {
                    background: rgba(244, 63, 94, 0.15) !important;
                    border-color: var(--tm-error) !important;
                    color: #fb7185 !important;
                }

                /* Timer & Score in Quiz Header */
                .tm-quiz-header {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                    color: var(--tm-text-secondary);
                }

                .tm-timer {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-weight: bold;
                }

                .tm-timer.warning {
                    color: var(--tm-error);
                    animation: tmShake 0.4s ease infinite;
                }

                /* Explanation Card */
                .tm-explanation {
                    background: rgba(139, 92, 246, 0.05);
                    border: 1px dashed rgba(139, 92, 246, 0.3);
                    padding: 14px;
                    border-radius: 12px;
                    font-size: 13px;
                    color: #cbd5e1;
                    line-height: 1.5;
                    margin-top: 10px;
                    animation: tmSlideUp 0.3s ease;
                }

                .tm-explanation-title {
                    font-weight: bold;
                    color: #a78bfa;
                    margin-bottom: 4px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .tm-footer-actions {
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 15px;
                }

                .tm-btn-primary {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    border: none;
                    border-radius: 12px;
                    padding: 10px 20px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .tm-btn-primary:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
                }

                /* Review Summary layout */
                .tm-summary-card {
                    text-align: center;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .tm-summary-icon {
                    font-size: 48px;
                }

                .tm-score-big {
                    font-size: 40px;
                    font-weight: 900;
                    color: var(--tm-success);
                }

                .tm-incorrect-summary {
                    width: 100%;
                    text-align: left;
                    margin-top: 15px;
                    max-height: 200px;
                    overflow-y: auto;
                }

                .tm-incorrect-item {
                    border-left: 3px solid var(--tm-error);
                    background: rgba(244, 63, 94, 0.02);
                    padding: 8px 12px;
                    border-radius: 0 8px 8px 0;
                    margin-bottom: 8px;
                    font-size: 13px;
                }

                /* ANIMATIONS & KEYFRAMES */
                @keyframes tmPulse {
                    0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7); }
                    70% { box-shadow: 0 0 0 15px rgba(139, 92, 246, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
                }

                @keyframes tmSlideUp {
                    from { transform: translateY(10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes tmShake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-2px); }
                    75% { transform: translateX(2px); }
                }
            `;
            document.head.appendChild(style);
        }
    };

    // ----------------------------------------------------
    // 7. MAIN CONTROLLER & APPLICATION STATE
    // ----------------------------------------------------
    const TestApp = {
        currentCategory: 'sliding_window',
        currentMode: 'concept', // concept, speedrun, code
        questions: [],
        currentQIndex: 0,
        score: 0,
        wrongAnswers: [],
        timerInterval: null,
        timeLeft: 15,
        timerActive: false,
        isAnswered: false,

        init() {
            Styles.inject();
            State.load();
            this.createFAB();
            this.createModal();
            
            // Set dynamic category based on current page
            const detected = PageParser.detectTopic();
            if (detected) {
                this.currentCategory = detected;
            }
        },

        createFAB() {
            if (document.getElementById('test-mode-fab')) return;
            const fab = document.createElement('button');
            fab.id = 'test-mode-fab';
            
            // Render Graduation Cap Icon SVG
            fab.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.12 12.33L12 16.08l6.88-3.75v3.42c-2 1.35-4.5 2.25-6.88 2.25s-4.88-.9-6.88-2.25v-3.42z"/>
                </svg>
                <span>Study & Test Mode</span>
            `;

            // Append streak fires if user has active streak
            if (State.streak > 0) {
                const streakSpan = document.createElement('span');
                streakSpan.className = 'fab-streak';
                streakSpan.innerHTML = `🔥 ${State.streak}`;
                fab.appendChild(streakSpan);
            }

            fab.addEventListener('click', () => {
                AudioEngine.playClick();
                this.openDashboard();
            });

            document.body.appendChild(fab);
        },

        createModal() {
            if (document.getElementById('test-mode-modal')) return;
            const modal = document.createElement('div');
            modal.id = 'test-mode-modal';
            modal.innerHTML = `
                <div id="test-mode-panel">
                    <button class="tm-close-btn" id="tm-close-btn" aria-label="Close modal">&times;</button>
                    <div id="tm-modal-body"></div>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('tm-close-btn').addEventListener('click', () => {
                AudioEngine.playClick();
                this.closeModal();
            });

            // Close on overlay clicking
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });
        },

        openDashboard() {
            const modal = document.getElementById('test-mode-modal');
            modal.classList.add('active');
            this.renderDashboard();
        },

        closeModal() {
            const modal = document.getElementById('test-mode-modal');
            modal.classList.remove('active');
            this.stopTimer();
        },

        renderDashboard() {
            const body = document.getElementById('tm-modal-body');
            const totalHighScore = Object.values(State.scores).reduce((sum, current) => sum + current, 0);

            let categoryOptionsHTML = '';
            for (const [key, label] of Object.entries(CATEGORIES)) {
                const selected = this.currentCategory === key ? 'selected' : '';
                categoryOptionsHTML += `<option value="${key}" ${selected}>${label}</option>`;
            }

            body.innerHTML = `
                <div class="tm-header">
                    <div class="tm-title-group">
                        <div class="tm-title">🎓 Code Study & Test Dashboard</div>
                    </div>
                    <div class="tm-stats">
                        <div class="tm-stat-badge">🔥 Streak: <span class="tm-stat-val">${State.streak} Days</span></div>
                        <div class="tm-stat-badge">🏆 Total Score: <span class="tm-stat-val">${totalHighScore} pts</span></div>
                    </div>
                </div>

                <div class="tm-select-group">
                    <label class="tm-select-label">Choose Study/Quiz Category</label>
                    <select class="tm-select" id="tm-category-select">
                        ${categoryOptionsHTML}
                    </select>
                </div>

                <div class="tm-mode-grid">
                    <div class="tm-mode-card" data-mode="concept">
                        <div class="tm-mode-icon">🎯</div>
                        <div class="tm-mode-title">Concept Quiz</div>
                        <div class="tm-mode-desc">Handcrafted & dynamic interview questions testing patterns, definitions, and logic.</div>
                    </div>
                    <div class="tm-mode-card" data-mode="speedrun">
                        <div class="tm-mode-icon">⚡</div>
                        <div class="tm-mode-title">Complexity Speedrun</div>
                        <div class="tm-mode-desc">Rapid-fire Big-O time and space complexity challenge. Beat the 15s countdown!</div>
                    </div>
                    <div class="tm-mode-card" data-mode="code" style="grid-column: span 2;">
                        <div class="tm-mode-icon">🧩</div>
                        <div class="tm-mode-title">Code Completion Challenge</div>
                        <div class="tm-mode-desc">Dynamically hides key syntax structures or pointer updates from this page's boilerplate and asks you to correct it!</div>
                    </div>
                </div>
            `;

            // Bind Events
            document.getElementById('tm-category-select').addEventListener('change', (e) => {
                this.currentCategory = e.target.value;
                AudioEngine.playClick();
            });

            document.querySelectorAll('.tm-mode-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    AudioEngine.playClick();
                    const mode = card.getAttribute('data-mode');
                    this.startQuiz(mode);
                });
            });
        },

        startQuiz(mode) {
            this.currentMode = mode;
            this.currentQIndex = 0;
            this.score = 0;
            this.wrongAnswers = [];
            this.isAnswered = false;

            // Compile Question list
            let baseQuestions = [];

            if (mode === 'concept') {
                // Fetch hard-coded questions
                baseQuestions = [...(QUIZ_DATA[this.currentCategory] || [])];
                
                // Add dynamically generated page items if available
                const dynamicCode = PageParser.parseCodeCompletion();
                dynamicCode.forEach(q => {
                    baseQuestions.push({
                        q: q.q,
                        code: q.code,
                        o: q.o,
                        a: q.a,
                        ex: q.ex
                    });
                });

                if (baseQuestions.length === 0) {
                    // Fail-safe default
                    baseQuestions = [
                        {
                            q: "What is a main advantage of dynamic programming over simple recursion?",
                            o: ["DP stores subproblem answers to avoid recalculating", "DP compiles the code directly to GPU registers", "DP only uses static variable bindings", "DP eliminates code call stack overhead"],
                            a: 0,
                            ex: "Dynamic Programming optimizes simple recursion by memoizing (storing) solutions to overlapping subproblems, changing O(2^N) execution chains to O(N) paths."
                        }
                    ];
                }
            } else if (mode === 'speedrun') {
                // Complexity questions parsed from current page + fallback defaults
                const parsed = PageParser.parseComplexity();
                baseQuestions = parsed;

                // If page had no tables, load common algorithm complexities
                if (baseQuestions.length === 0) {
                    baseQuestions = [
                        { q: "What is the average time complexity of Binary Search?", o: ["O(log N)", "O(N)", "O(N log N)", "O(1)"], a: 0, ex: "Binary Search halves search spaces recursively: O(log N) operations." },
                        { q: "What is the worst-case time complexity of Quick Sort?", o: ["O(N^2)", "O(N log N)", "O(N)", "O(2^N)"], a: 0, ex: "Worst-case occurs when partitions are highly skewed (e.g. sorted arrays): O(N^2)." },
                        { q: "What is the space complexity of Breadth First Search (BFS) on a tree?", o: ["O(W) where W is maximum width of tree", "O(H) where H is maximum height", "O(1)", "O(log N)"], a: 0, ex: "BFS retains leaf level components in the queue, yielding O(W) space." }
                    ];
                }
            } else if (mode === 'code') {
                // Target parser for code completion
                baseQuestions = PageParser.parseCodeCompletion();
                
                if (baseQuestions.length === 0) {
                    // Fallback default code block challenge
                    baseQuestions = [
                        {
                            code: "def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        # [??? CHOOSE MISSING LINE HERE ???]\n        prev = curr\n        curr = next_node\n    return prev",
                            q: "What is the missing code line to complete standard in-place singly linked list reversal?",
                            o: ["curr.next = prev", "prev.next = curr", "curr.next = head", "prev.next = next_node"],
                            a: 0,
                            ex: "Reversing pointers requires setting curr.next to point back to prev before advancing traversal pointers."
                        }
                    ];
                }
            }

            // Shuffle questions to make it dynamic
            this.questions = PageParser.shuffleArray(baseQuestions).slice(0, 5); // Max 5 questions per run
            this.renderQuestion();
        },

        renderQuestion() {
            this.isAnswered = false;
            this.stopTimer();

            const body = document.getElementById('tm-modal-body');
            const q = this.questions[this.currentQIndex];

            // Render Header with progress bar
            const percent = ((this.currentQIndex) / this.questions.length) * 100;
            
            let codeBlockHTML = '';
            if (q.code) {
                codeBlockHTML = `<pre class="tm-code-pre"><code>${this.escapeHTML(q.code)}</code></pre>`;
            }

            let optionsHTML = '';
            q.o.forEach((opt, idx) => {
                optionsHTML += `<button class="tm-option-btn" data-index="${idx}">${this.escapeHTML(opt)}</button>`;
            });

            body.innerHTML = `
                <div class="tm-quiz-wrapper">
                    <div class="tm-quiz-header">
                        <div>Question ${this.currentQIndex + 1} of ${this.questions.length}</div>
                        <div class="tm-timer" id="tm-timer-box">
                            <span class="timer-icon">⏱️</span> <span id="tm-timer-val">15s</span>
                        </div>
                    </div>
                    <div class="tm-progress-bar-bg">
                        <div class="tm-progress-bar-fill" style="width: ${percent}%;"></div>
                    </div>

                    <div class="tm-question-text">${this.escapeHTML(q.q)}</div>
                    ${codeBlockHTML}

                    <div class="tm-options-list" id="tm-options-container">
                        ${optionsHTML}
                    </div>

                    <div id="tm-explanation-container"></div>

                    <div class="tm-footer-actions">
                        <button class="tm-btn-primary" id="tm-next-btn" style="display:none;">Next</button>
                    </div>
                </div>
            `;

            // Setup click listeners for options
            document.querySelectorAll('.tm-option-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
                    this.handleAnswer(selectedIdx);
                });
            });

            document.getElementById('tm-next-btn').addEventListener('click', () => {
                AudioEngine.playClick();
                this.nextQuestion();
            });

            // Start countdown timer for Complexity Speedrun
            if (this.currentMode === 'speedrun') {
                this.startTimer(15);
            } else {
                document.getElementById('tm-timer-box').style.display = 'none';
            }
        },

        startTimer(seconds) {
            this.timeLeft = seconds;
            this.timerActive = true;
            
            const timerVal = document.getElementById('tm-timer-val');
            const timerBox = document.getElementById('tm-timer-box');
            timerVal.textContent = `${this.timeLeft}s`;

            this.timerInterval = setInterval(() => {
                this.timeLeft--;
                timerVal.textContent = `${this.timeLeft}s`;

                if (this.timeLeft <= 5) {
                    timerBox.classList.add('warning');
                }

                if (this.timeLeft <= 0) {
                    this.stopTimer();
                    this.handleAnswer(-1); // Timeout
                }
            }, 1000);
        },

        stopTimer() {
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
            this.timerActive = false;
            const timerBox = document.getElementById('tm-timer-box');
            if (timerBox) timerBox.classList.remove('warning');
        },

        handleAnswer(selectedIdx) {
            if (this.isAnswered) return;
            this.isAnswered = true;
            this.stopTimer();

            const q = this.questions[this.currentQIndex];
            const optionsContainer = document.getElementById('tm-options-container');
            const btns = optionsContainer.querySelectorAll('.tm-option-btn');

            // Grade answer
            let isCorrect = selectedIdx === q.a;
            
            if (isCorrect) {
                AudioEngine.playCorrect();
                this.score += 20; // 20 points per question
                if (selectedIdx !== -1 && btns[selectedIdx]) {
                    btns[selectedIdx].classList.add('correct');
                }
            } else {
                AudioEngine.playIncorrect();
                this.wrongAnswers.push({
                    q: q.q,
                    userAns: selectedIdx === -1 ? "Timeout" : q.o[selectedIdx],
                    correctAns: q.o[q.a]
                });

                if (selectedIdx !== -1 && btns[selectedIdx]) {
                    btns[selectedIdx].classList.add('wrong');
                }
                // Highlight correct answer
                if (btns[q.a]) {
                    btns[q.a].classList.add('correct');
                }
            }

            // Lock options from clicking
            btns.forEach(btn => btn.style.pointerEvents = 'none');

            // Show explanation card
            const expContainer = document.getElementById('tm-explanation-container');
            expContainer.innerHTML = `
                <div class="tm-explanation">
                    <div class="tm-explanation-title">
                        <span>💡 Explanation:</span>
                    </div>
                    <div>${q.ex}</div>
                </div>
            `;

            // Show next button
            document.getElementById('tm-next-btn').style.display = 'block';
        },

        nextQuestion() {
            this.currentQIndex++;
            if (this.currentQIndex < this.questions.length) {
                this.renderQuestion();
            } else {
                this.finishQuiz();
            }
        },

        finishQuiz() {
            this.stopTimer();
            const body = document.getElementById('tm-modal-body');

            // Save state & high score updates
            const isNewHighScore = State.setHighScore(this.currentCategory, this.score);
            State.updateStreak();

            // Fire confetti on high score or perfect score
            const isPerfect = this.score === (this.questions.length * 20);
            if (isPerfect || isNewHighScore) {
                AudioEngine.playComplete();
                Confetti.burst();
            } else {
                AudioEngine.playClick();
            }

            let summaryIcon = '🎯';
            let summaryText = 'Great effort! Keep practicing.';
            if (isPerfect) {
                summaryIcon = '🏆';
                summaryText = 'Outstanding! Perfect score!';
            } else if (this.score >= 60) {
                summaryIcon = '🌟';
                summaryText = 'Well done! Excellent grasp of concepts.';
            }

            let incorrectSummaryHTML = '';
            if (this.wrongAnswers.length > 0) {
                incorrectSummaryHTML = `
                    <div class="tm-incorrect-summary">
                        <div style="font-weight: 700; font-size: 13px; margin-bottom: 8px; color: var(--tm-text-secondary);">Review Incorrect Answers:</div>
                `;
                this.wrongAnswers.forEach(item => {
                    incorrectSummaryHTML += `
                        <div class="tm-incorrect-item">
                            <div style="font-weight:600; margin-bottom:2px;">${this.escapeHTML(item.q)}</div>
                            <div style="color:var(--tm-error);">Your answer: ${this.escapeHTML(item.userAns)}</div>
                            <div style="color:var(--tm-success);">Correct answer: ${this.escapeHTML(item.correctAns)}</div>
                        </div>
                    `;
                });
                incorrectSummaryHTML += `</div>`;
            }

            body.innerHTML = `
                <div class="tm-summary-card">
                    <div class="tm-summary-icon">${summaryIcon}</div>
                    <div class="tm-title">Quiz Complete!</div>
                    <p style="font-size: 14px; color: var(--tm-text-secondary); margin-bottom: 8px;">${summaryText}</p>
                    
                    <div class="tm-score-big">${this.score} / ${this.questions.length * 20}</div>
                    <p style="font-size:12px; color: var(--tm-text-secondary);">Points earned for high score</p>

                    ${isNewHighScore ? '<div style="background:rgba(250,204,21,0.2); border:1px solid #eab308; padding:4px 12px; border-radius:20px; font-size:12px; color:#facc15; font-weight:bold; margin-top:4px;">🎉 NEW HIGH SCORE!</div>' : ''}

                    ${incorrectSummaryHTML}

                    <div style="margin-top: 15px; display:flex; gap:10px;">
                        <button class="tm-btn-primary" id="tm-retry-btn">Try Again</button>
                        <button class="tm-btn-primary" id="tm-dash-btn" style="background: rgba(255,255,255,0.05); border: 1px solid var(--tm-border);">Dashboard</button>
                    </div>
                </div>
            `;

            document.getElementById('tm-retry-btn').addEventListener('click', () => {
                AudioEngine.playClick();
                this.startQuiz(this.currentMode);
            });

            document.getElementById('tm-dash-btn').addEventListener('click', () => {
                AudioEngine.playClick();
                this.renderDashboard();
            });
        },

        escapeHTML(str) {
            if (!str) return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        }
    };

    // Initialize module on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => TestApp.init());
    } else {
        TestApp.init();
    }
})();
