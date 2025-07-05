### NLP Evolution

![image](https://github.com/user-attachments/assets/492d4bfc-6ab2-479e-bbea-8e6f855b0a45)
> [ N-gram ] → [ Neural LM ] → [ RNN ] → [ GRU / LSTM ] → [ Transformer ] → [ BERT ]
![image](https://github.com/user-attachments/assets/e4cfbd0b-a6e3-4d15-b927-9a9a32c45ca1)

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


