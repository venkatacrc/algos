
# 🧠 ML System Design — Q\&A Summary


## 1. How do n-gram features control the dimensionality of cross features using hashing?

* **Hashing trick** reduces dimensionality by mapping n-gram feature crosses into a fixed-size hash bucket.
* Prevents combinatorial explosion of cross-feature space.

---

## 2. How can I show the Ad Ranking system as a multi-stage ML problem?

* **Stage 1**: Candidate retrieval (e.g., ANN, Two-Tower)
* **Stage 2**: Lightweight ranking (e.g., GBDTs)
* **Stage 3**: Deep ranking (e.g., DLRM, CTR/ROI models)
* **Stage 4**: Post-ranking (budgeting, diversity, calibration)

---

## 3. How do you generate the training data for these models?

* **Positive labels**: user clicks, conversions, watch time
* **Negatives**: impressions without engagement
* **Bias correction**: randomization, counterfactual logging

---

## 4. Can we use feature backfill to mitigate the cold start problem?

* Yes. Backfill from historical logs or similar entities to populate missing features for new users/items.

---

## 5. What other techniques help with cold start?

* Content-based models (e.g., metadata)
* User/item embeddings via LLMs
* Zero-shot/few-shot learning
* Transfer learning from similar domains

---

## 6. Multi-stage channel: Explain stages

* **Stage 1**: Fast filtering via retrieval (recall-optimized)
* **Stage 2**: Precision-focused ranker (DL models)
* **Stage 3**: ROI-aware post-ranking (e.g., budget pacing)

---

## 7. Deployment/serving infrastructure?

* **Distributed inference**, **hardware acceleration**
* **Tail latency mitigation** via batching, caching, quantization

---

## 8. How do you compute in-batch negative loss?

* Use each sample’s positive as anchor and others as negatives.
* Often implemented with softmax cross-entropy over dot products.

---

## 9. How can you enhance intent understanding with LLMs?

* Use LLM prompting or fine-tuning to extract structured intents.
* Example: "Show me blue Nikes" → `{"brand": "Nike", "color": "blue"}`

---

## 10. How to extract structured intent using NER?

* Train/fine-tune NER model to extract slots like `BRAND`, `PRICE`.
* Use BIO tagging + CRF or transformer-based NER.

---

## 11. How to learn multiple tasks in two-tower BERT?

* Add **task-specific heads** to shared towers.
* Use **multi-task loss**: $\sum \lambda_i \mathcal{L}_i$
* Tasks: CTR, engagement, conversion, etc.

---

## 12. How is mean pooling computed?

* Mean of token embeddings, excluding padding:

```python
mean = (embeddings * mask).sum(1) / mask.sum(1)
```

---

## 13. How are NDCG\@5 and NDCG\@10 computed?

* DCG:

$$
DCG_k = \sum_{i=1}^k \frac{2^{rel_i} - 1}{\log_2(i+1)}
$$

* NDCG = DCG / IDCG (ideal DCG)

---

## 14. Loss function for XGBoost ranking?

* `rank:pairwise` (LambdaRank-style): pairwise logistic loss
* `rank:ndcg`: listwise loss optimizing NDCG
* Also supports `rank:map` for MAP

---

## 15. What is BPR / Hinge loss?

* **BPR**: Soft pairwise loss

  $$
  -\log \sigma(s_{pos} - s_{neg})
  $$
* **Hinge**: Hard margin

  $$
  \max(0, margin - (s_{pos} - s_{neg}))
  $$

---

## 16. Loss function for XGBoost with tabular features?

* Same as above (e.g., `rank:pairwise` or `rank:ndcg`)
* Model input is tabular features; loss is rank-based.

---

## 17. What is MAP metric?

* MAP = Mean of Average Precision across queries

$$
AP = \frac{1}{R} \sum P(k) \cdot rel_k
$$

---

## 18. What is MRR?

* Mean Reciprocal Rank:

$$
MRR = \frac{1}{Q} \sum \frac{1}{\text{rank of first relevant item}}
$$

---

## 19. What are learning-to-rank problems at top tech companies?

| Company  | LTR Application  |
| -------- | ---------------- |
| Google   | Web search, Ads  |
| YouTube  | Video ranking    |
| Meta     | Feed, Reels, Ads |
| LinkedIn | Job/person match |
| Amazon   | Product ranking  |

LTR problems span: search, feeds, ads, recs, QA, etc.

---

## 20. What are Satisfaction Proxies?

* Behavioral signals used to **approximate user satisfaction**.
* Examples: dwell time, return-to-SERP, CTR, watch time, shares.

---

## 21. What is Return-to-SERP Rate?

* % of sessions where users return to the search results after clicking.
* High rate = dissatisfaction proxy.

---

Would you like this saved as a `.md` file or displayed as a rendered HTML table?
