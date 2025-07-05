### NLP Evolution

#### 📚 Language Model Evolution Summary

| Model                                                   | Core Idea                                                               | Strengths                                                        | Limitations                                                                |
| ------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **1. N-gram**                                           | Predict next word using fixed-size context (e.g., trigrams)             | Simple, fast, interpretable                                      | Data sparsity, no generalization, fixed context, no semantics              |
| **2. Neural Probabilistic LM**<br>(Bengio et al., 2003) | Learn word embeddings + MLP to predict next word from context           | Generalizes to similar words, learns distributed representations | Fixed-size context window, slow, poor long-term memory                     |
| **3. RNN**                                              | Sequentially process input, maintain a hidden state to encode history   | Variable-length context, parameter sharing                       | Vanishing/exploding gradients, poor long-term memory, no parallelism       |
| **4. GRU** (2014)                                       | RNN with gating mechanism (update/reset gates) to manage memory         | Better at capturing dependencies, fewer parameters than LSTM     | Still sequential, less expressive than LSTM in some cases                  |
| **5. LSTM** (1997, popularized 2014)                    | Adds memory cell + input/forget/output gates                            | Captures long-term dependencies, stable training                 | Computationally expensive, sequential, still hard to parallelize           |
| **6. Transformer** (2017)                               | Uses self-attention for global context and full parallelization         | Global context, fast (parallel), scalable                        | No inherent order (needs positional encodings), costly softmax (quadratic) |
| **7. BERT** (2018)                                      | Transformer encoder trained with Masked Language Modeling (MLM) and NSP | Deep bidirectional context, pretraining + fine-tuning paradigm   | No autoregressive generation (not good for generation tasks), expensive    |


> [ N-gram ] → [ Neural LM ] → [ RNN ] → [ GRU / LSTM ] → [ Transformer ] → [ BERT ]
![image](https://github.com/user-attachments/assets/e4cfbd0b-a6e3-4d15-b927-9a9a32c45ca1)
> 

#### High-Level Concepts Behind the Transition
     - From memorization → generalization: N-gram to neural LM (Bengio)     
     - From fixed context → dynamic memory: Neural LM → RNNs     
     - From shallow memory → gated memory: RNNs → GRU/LSTM
     - From sequential → global + parallel: LSTM → Transformer     
     - From unidirectional → bidirectional understanding: Transformer → BERT

#### 🎯 Use-Cases:

| Model        | Best Suited For                                |
| ------------ | ---------------------------------------------- |
| N-gram       | Small-scale or rule-based NLP tasks            |
| Neural LM    | Academic experiments, early NLP systems        |
| RNN/LSTM/GRU | Speech, text generation (pre-Transformer)      |
| Transformer  | Machine translation, summarization, generation |
| BERT         | Text classification, question answering, NLU   |


1. n-gram model
2. A neural probabilistic language model - Bengio et.
     - Plus (+)
     + learned representations of words in a shared vector space( like modern word2vec)
     + Allowed generalization to unseen n-grams via embeddings
     + Avoided the curse of dimensionality n sparse n-gram models
     + Inspired later work on RNNs, LSTMs, and Transformers
     - Minus (-)
     - fixed context window (e.g. trigrams or 5-grams)
     - word order within context is shallow
     - parameter explosion: input grows with context size.
     - expensive softmax over large vocabularies
4. RNNs
     + Plus(+)
     + Handle variable -length context via hidden state
     + model sequential word order more naturally
     + Parameter efficiency - by resuing the same RNN cell at each time step (weight sharing)
     + Unlike MLPs that concatenate embeddings and grow input size, RNNs use a fixed-size hidden state, no matter how long the sequence is.
     + generate or score tokens one by one, which is ideal for text generation or steaming data
     + Minus (-)
     + Vanishing/exploding gradients during Back Propagation Through Time (BPTT) -> limits long range memory
     + hard to parallelize
     + Softmax over large vocab still costly
  
![image](https://github.com/user-attachments/assets/b3497b5e-3ac2-4b31-92fb-aff014fb2523)
![image](https://github.com/user-attachments/assets/4493f536-a5e1-4a0f-9971-712b5ffc57f9)
![image](https://github.com/user-attachments/assets/ca958853-d7ed-4416-8cdf-0efda5fade45)
![image](https://github.com/user-attachments/assets/6de41c14-7357-46eb-ae6d-1109f240eb0c)


Here's a summary of key language models, detailing their architectures and typical loss functions:

## Traditional Language Models

**1. N-gram Model**
* **Architecture:** Not a neural network. It's a statistical model that predicts the probability of the next word in a sequence based on the preceding $n-1$ words. It calculates these probabilities by counting occurrences of n-grams (sequences of $n$ words) in a training corpus and applying smoothing techniques (e.g., Add-1 smoothing, Good-Turing discounting) to handle unseen n-grams. For example, a bigram model ($n=2$) predicts $P(w_i | w_{i-1})$.
* **Loss Function:** Implicitly, the goal is to maximize the likelihood of the observed sequences in the training data. This translates to minimizing **negative log-likelihood** (or maximizing log-likelihood), often evaluated via **perplexity**, which is the exponential of the average negative log-likelihood. It's not "trained" with backpropagation like neural networks.

## Neural Language Models (RNN-based)

**2. Neural Probabilistic Language Model (NPLM) (Bengio et al., 2003)**
* **Architecture:** One of the earliest neural network-based language models. It uses a feed-forward neural network. Words are first converted into dense vector representations (word embeddings). The embeddings of the preceding $n-1$ words are concatenated and fed into a hidden layer, followed by an output layer with a softmax function to predict the probability distribution over the vocabulary for the next word.
* **Loss Function:** **Cross-Entropy Loss** between the predicted probability distribution and the one-hot encoded true next word.

**3. Recurrent Neural Network (RNN)**
* **Architecture:** Designed for sequential data. Unlike feed-forward networks, RNNs have recurrent connections that allow information to persist across time steps. At each time step $t$, an RNN takes the current input $x_t$ and the hidden state from the previous time step $h_{t-1}$ to compute a new hidden state $h_t$ and an output $y_t$. This "memory" allows them to capture dependencies in sequences. The basic RNN unit often uses `tanh` or `ReLU` activation functions.
* **Loss Function:** Typically **Cross-Entropy Loss** for sequence prediction tasks (e.g., language modeling, where the goal is to predict the next word in a sequence). The loss is often summed over all time steps in the sequence.

**4. Gated Recurrent Unit (GRU)**
* **Architecture:** A simpler variant of RNNs, designed to address the vanishing gradient problem and better capture long-term dependencies. GRUs have two main gates:
    * **Update Gate:** Determines how much of the previous hidden state to keep.
    * **Reset Gate:** Determines how much of the previous hidden state to forget.
    These gates are controlled by sigmoid activation functions and compute a candidate hidden state using a `tanh` activation.
* **Loss Function:** **Cross-Entropy Loss** for sequence prediction.

**5. Long Short-Term Memory (LSTM)**
* **Architecture:** A more complex variant of RNNs, explicitly designed to learn long-term dependencies and overcome the vanishing/exploding gradient problems. LSTMs feature a "cell state" that runs through the entire chain, acting as a conveyor belt for memory. They have three main gates that regulate information flow into and out of the cell state:
    * **Forget Gate:** Decides what information to discard from the cell state.
    * **Input Gate:** Decides which new information to store in the cell state.
    * **Output Gate:** Controls what part of the cell state is outputted as the hidden state.
    These gates use sigmoid activations, and other computations involve `tanh`.
* **Loss Function:** **Cross-Entropy Loss** for sequence prediction tasks.

## Transformer-based Models

**6. Transformer (Vaswani et al., 2017)**
* **Architecture:** Revolutionized sequence modeling by relying entirely on "attention mechanisms" instead of recurrence or convolutions. It consists of an **encoder-decoder** structure:
    * **Encoder:** A stack of identical layers. Each layer has two sub-layers: a multi-head self-attention mechanism and a position-wise feed-forward network. It processes the input sequence in parallel, allowing each word to attend to all other words in the input.
    * **Decoder:** Also a stack of identical layers. Each layer has three sub-layers: a masked multi-head self-attention (to prevent attending to future tokens), a multi-head encoder-decoder attention (to attend to the encoder's output), and a position-wise feed-forward network.
    * **Positional Encodings:** Added to word embeddings to provide information about the position of words in the sequence, as the self-attention mechanism is permutation-invariant.
* **Loss Function:** Typically **Cross-Entropy Loss** for sequence-to-sequence tasks (e.g., machine translation), where the decoder predicts the probability of the next token in the target sequence.

**7. BERT (Bidirectional Encoder Representations from Transformers) (Devlin et al., 2018)**
* **Architecture:** An "encoder-only" Transformer model. BERT is pre-trained on a massive amount of unlabeled text data using two self-supervised tasks:
    * **Masked Language Model (MLM):** Randomly masks a percentage of input tokens and the model's objective is to predict the original masked tokens based on their bidirectional context.
    * **Next Sentence Prediction (NSP):** The model is given pairs of sentences and learns to predict whether the second sentence is a direct continuation of the first.
    BERT's key innovation is its bidirectional training, meaning it considers context from both left and right sides of a word, which was a limitation of earlier unidirectional models like GPT.
* **Loss Function:** During pre-training, BERT uses a combined loss:
    * **Cross-Entropy Loss** for the Masked Language Model task (predicting masked tokens).
    * **Binary Cross-Entropy Loss** for the Next Sentence Prediction task.
    For fine-tuning on downstream tasks, the specific loss function depends on the task (e.g., **Cross-Entropy** for classification, **MSE** for regression, etc.).
