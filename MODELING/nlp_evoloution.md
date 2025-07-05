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


