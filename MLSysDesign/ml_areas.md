# Problem Navigation
- What is the Primary function?
-   select and show best( == highest expected value) something that maximizes platforms objective function.
-  What is the Primary Metric and the formula?
-  🧠 Pro Tip for ML System Design Interviews
    - Always mention versioning of features and delayed label joins as critical to data reliability in production pipelines. It shows strong ML Ops awareness.

    - perrsonalized news ranking systems.
    - ads recommendation system.
    - product recommendation system.
    - friend recommendation system for Twitter.
    - Google Search Ranking.
    - Centalized ML Management Platforms.
      
#### 🚀 Real System Examples
| System               | Real-World Models              |
| -------------------- | ------------------------------ |
| Meta (Feed, Ads)     | DLRM, DeepCTR, MMoE, QNN       |
| Google Search        | BM25 + BERT + LambdaMART       |
| TikTok Recs          | Two-Tower + Sequence Modeling  |
| Twitter Friend Graph | GraphSAGE, GNNs + heuristics   |
| Amazon Product Rec   | DeepFM, DSSM, personalized MLP |

# 🧠 ML System Design: Full Lifecycle Across Key Systems

This document captures the **end-to-end lifecycle** for fourteen major ML systems:

| #  | System Name                      | Primary Metric                  | Secondary Metrics               | Guardrail Metrics                | Model Type(s)                 | Loss Function(s)                | Evaluation Metrics            | Deployment Style              |
| -- | -------------------------------- | ------------------------------- | ------------------------------- | -------------------------------- | ----------------------------- | ------------------------------- | ----------------------------- | ----------------------------- |
| 1  | Personalized News Ranking        | CTR, dwell time                 | Relevance, recency              | Latency, bounce, diversity       | Wide & Deep, DLRM, DIN/DIEN   | BCE, BPR, Triplet, Softmax rank | NDCG\@k, MAP, AUC             | Real-time + cache             |
| 2  | Ads Recommendation               | eCPM (CTR × bid)                | CVR, ROI                        | Budget pacing, latency, fairness | XGBoost, DLRM, DeepFM         | Logistic, NDCG, Uplift          | AUC, ROI simulation           | Real-time bidders             |
| 3  | Product Recommendation           | Clicks, conversions             | Add-to-cart, revenue            | Inventory freshness, diversity   | Two-Tower, BERT4Rec, GNN      | BPR, BCE, Triplet               | Recall\@k, NDCG               | ANN engine, daily refresh     |
| 4  | Friend Recommendation            | Follow-back rate                | Engagement, graph closure       | Abuse rate, latency              | GNNs: GraphSAGE, Node2Vec     | Link/BPR/contrastive            | Edge prediction, stickiness   | Online edge scorer            |
| 5  | Google Search Ranking            | NDCG\@10                        | Clicks, bounce rate             | Latency, content freshness       | LambdaMART, BERT Reranker     | LambdaLoss, ListMLE             | NDCG, MAP, MRR                | Multi-stage cascade           |
| 6  | Centralized ML Platform          | Model accuracy/freshness        | Drift, coverage                 | Serving uptime, latency          | IsolationForest, XGBoost      | Forecasting, anomaly            | Drift score, infra metrics    | gRPC APIs + monitoring agents |
| 7  | Ads Ranking Evaluation Framework | ROI, eCPM                       | Calibration, revenue lift       | Label leakage, join errors       | XGBoost, uplift models        | Binary, uplift, robust          | Replay, shadow eval           | Shadow mode + flags           |
| 8  | Fake News Detection              | Accuracy, F1                    | Trust score, source credibility | False positive, freedom tradeoff | BERT, GNNs                    | BCE, weighted focal             | Precision, ROC-AUC            | Batch + real-time API         |
| 9  | Weapon Ads Detection             | Violation precision/recall      | Coverage of ad classes          | Latency, moderation backlog      | ViLT, CLIP                    | BCE, focal loss                 | Manual A/B, recall            | Inline moderation pipeline    |
| 10 | Next Word Prediction             | Perplexity                      | Accuracy\@k                     | Toxicity, hallucination          | GPT, LLaMA                    | Cross-entropy                   | Perplexity, top-k accuracy    | On-device or cached inference |
| 11 | Facebook Marketplace             | Match rate                      | View rate, transaction rate     | Fraud detection, latency         | Two-Tower + graph ranking     | Contrastive, pairwise           | Match, clicks, funnel metrics | Cascade: retrieval → rank     |
| 12 | Comment Moderation               | Block rate (toxicity detection) | False positive rate             | Fairness, latency                | RoBERTa, BERT classifiers     | BCE, weighted loss              | F1, AUC, mod workload         | Inline + batch                |
| 13 | Instagram Explore Page           | Engagement (likes, clicks)      | Diversity, freshness            | Repetition, latency              | Multi-stage vision+engagement | Ranking, NDCG                   | CTR, dwell time, scroll depth | Batch + real-time ranking     |
| 14 | Language Detection               | Language ID accuracy            | Confidence score                | Short text robustness            | FastText, CNNs, NB            | Cross-entropy                   | Accuracy, top-3 match         | On-device or preprocessing    |

Let me know if you want this table exported as CSV, Markdown table only, or with links to full descriptions.



## 📊 Summary Table of ML System Functions & Metrics

| # | System                                   | 🎯 Primary Function                                | ✅ Primary Metric(s)                                                      | 🧪 Secondary Metric(s)                                                                                     | 🛡️ Guardrail Metric(s)                                                                                     |
| - | ---------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**            | Rank news articles for user interest               | NDCG\@k  <br> DCG:  $\sum_{i=1}^{k} \frac{2^{rel_i} - 1}{\log_2(i+1)}$   | - Dwell Time  <br>- Scroll Depth <br>- Click Diversity                                                     | - Bounce Rate <br>- Clickbait Score <br>- Time-on-site Stability <br>- Abuse Violation Rate                 |
| 2 | **Ads Recommendation System**            | Show high-ROI ads for user/ad relevance            | eCPM = CTR × Bid × Quality <br> or NDCG / CTR                            | - Post-click Engagement <br>- CVR (Conversion Rate) <br>- RPM (Revenue per 1000 views)                     | - Advertiser ROI <br>- Ad Fatigue <br>- User Complaints <br>- Ad Block Rate                                 |
| 3 | **Product Recommendation System**        | Recommend relevant products to increase conversion | MAP, AUC, Conversion Rate                                                | - Add-to-Cart Rate <br>- Repeat Purchase <br>- Revenue/User <br>- View Diversity                           | - Cart Abandonment <br>- Category Fairness <br>- Inventory Pressure <br>- CTR Saturation                    |
| 4 | **Friend Recommendation (Twitter)**      | Suggest relevant people to follow                  | Precision\@k, MRR <br> MRR: $\frac{1}{Q} \sum \frac{1}{\text{rank}_{q}}$ | - Follow-back Rate <br>- Social Engagement <br>- Diversity of Connections                                  | - Block/Mute Rate <br>- Abuse/Spam Reports <br>- Echo Chamber Risk <br>- Post-follow Churn                  |
| 5 | **Google Search Ranking**                | Return most relevant results to query              | NDCG\@k, Return-to-SERP Rate                                             | - Click-through Rate (CTR) <br>- Long Click Rate <br>- Query Reformulation Rate                            | - Return-to-SERP Rate <br>- Spam/Low-Quality Score <br>- Latency (P99) <br>- Ads Cannibalization            |
| 6 | **Centralized ML Management Platforms**  | Manage, deploy, monitor ML systems                 | Model Accuracy <br> Latency (P99) <br> Success Rate                      | - Resource Utilization <br>- Throughput <br>- Drift Alerts <br>- Time to Deployment                        | - Accuracy Drop <br>- SLA Misses <br>- Rollback Rate <br>- Data Staleness                                   |
| 7 | **Evaluation Framework for Ads Ranking** | Assess quality & ROI of ad ranking pipelines       | ROI, NDCG, CTR, CVR, AUC                                                 | - Calibration Accuracy <br>- Lift over baseline <br>- Profit-per-mille (PPM) <br>- Budget Utilization Rate | - Underdelivery / Overdelivery <br>- Pacing Errors <br>- Fairness Across Advertisers <br>- Revenue Dilution |



### Data Collection in Real ML Systems
| # | System                              | 📥 Data Collection Methods                                                                                            | ⚙️ Key Components                                                                                                                                     | ⚖️ Tradeoffs & Considerations                                                                                                                                                    |
| - | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**       | - Click logs<br>- Scroll depth<br>- Time-on-article<br>- Shares/likes<br>- Impressions                                | - JavaScript web trackers<br>- Log collectors (e.g., Kafka)<br>- Mobile SDKs<br>- Snowplow / Segment<br>- Browser APIs                                | ✅ JS tracking is easy to deploy <br>❌ May be blocked by browsers/ad-blockers <br>✅ SDKs offer richer context <br>❌ Harder to version and maintain                                |
| 2 | **Ads Recommendation**              | - Impressions & clicks<br>- Bid requests/responses<br>- Conversions (post-click)<br>- Pixel firing & attribution logs | - Pixel tracking<br>- Server-to-server (S2S) logging<br>- Event streaming (Kafka, Pub/Sub)<br>- Real-time data pipelines (Flink, Spark)               | ✅ Pixel tracking works for 3rd-party pages <br>❌ Fragile due to browser/JS failures <br>✅ S2S is robust and scalable <br>❌ Attribution delays & missing cookies (privacy)        |
| 3 | **Product Recommendation**          | - User browse/click/add-to-cart logs<br>- Purchase & return logs<br>- View/interaction heatmaps                       | - Web/mobile SDKs<br>- Data lake ingestion<br>- Clickstream loggers<br>- Snowflake / Hive tables                                                      | ✅ Logs are passively collected and non-intrusive <br>❌ Large volume; high storage cost <br>✅ Event schema can evolve <br>❌ Clickstream may lack intent clarity                   |
| 4 | **Friend Recommendation (Twitter)** | - Follow graph updates<br>- Like/retweet/comment patterns<br>- Mutual follows, co-engagement                          | - Social graph service (e.g., GraphDB, Nebula, RedisGraph)<br>- Event queues (Kafka)<br>- Offline ETL pipelines                                       | ✅ Graph DBs enable real-time edge queries <br>❌ Scaling with millions of edges is hard <br>✅ Kafka ensures ordered updates <br>❌ ETL lags affect freshness                       |
| 5 | **Google Search Ranking**           | - Click logs<br>- Query reformulation<br>- Dwell time<br>- Return-to-SERP                                             | - Search logging service<br>- Chrome client-side logging<br>- Real-user monitoring (RUM)<br>- Federated analytics                                     | ✅ Client-side gives richer behavior data <br>❌ Browser privacy & telemetry limits <br>✅ Federated is privacy-friendly <br>❌ Harder to debug/model                                |
| 6 | **Centralized ML Management**       | - Model training logs<br>- Metadata about datasets/models<br>- Inference traces<br>- Deployment status                | - ML metadata store (e.g., MLMD)<br>- Feature stores (Feast, Tecton)<br>- Experiment tracker (e.g., MLflow)<br>- Prometheus / Grafana / OpenTelemetry | ✅ Feature stores enable online + offline consistency <br>❌ Operational complexity <br>✅ Logging infra like OpenTelemetry is extensible <br>❌ Requires culture of instrumentation |
| 7 | **Ads Ranking Evaluation**          | - Logs of serving decisions<br>- Auction inputs/outputs<br>- Post-click behavior (CVR)<br>- Budget delivery logs      | - Shadow logging / traffic mirroring<br>- Randomization framework (e.g., A/B infra)<br>- Delayed conversion joiners                                   | ✅ Shadow traffic captures ground truth w/o exposure <br>❌ Expensive compute cost <br>✅ A/B infra gives unbiased data <br>❌ Requires very high-quality labeling/timestamping      |

#### 🔍 Tradeoff Themes Across Systems

| Component Type        | Pro                          | Con                               | Use Case Fit           |
| --------------------- | ---------------------------- | --------------------------------- | ---------------------- |
| **Web SDKs**          | Rich, contextual             | Versioning & device fragmentation | Web & mobile apps      |
| **Pixel tracking**    | Universal, stateless         | Prone to failure, privacy limits  | Ads & attribution      |
| **Server logs (S2S)** | Reliable, structured         | Setup cost, backend dependent     | Ad ranking, search     |
| **Feature stores**    | Training-serving consistency | Complex infra, real-time updates  | All ML pipelines       |
| **Kafka**             | Ordered, scalable            | Needs downstream consumers        | Real-time systems      |
| **Graph DBs**         | Expressive queries           | Write-heavy scaling issues        | Social graphs          |
| **Federated logging** | Privacy-preserving           | Hard to debug, aggregate          | Search, mobile systems |


# Features & Feature Engineering
### 🧠 Features, Transformations, and Storage in ML Systems
| # | System                              | 🔑 Key Feature Types                                                                                                                   | 🛠️ Feature Engineering                                                                                                                                    | 🗂️ Storage for Downstream ML                                                                                             |
| - | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**       | - User ID, age, location<br>- Article ID, topic, timestamp<br>- Click history<br>- Time-of-day, device                                 | - Text embeddings (article, title)<br>- Timestamp bucketing<br>- TF-IDF / LLM embeddings<br>- Normalization (age)<br>- Session history encoding            | - **Offline**: Feature Store (e.g., Feast, Tecton)<br>- **Online**: Redis, DynamoDB<br>- **Batch**: Data Lake (S3, GCS)   |
| 2 | **Ads Recommendation**              | - User ID, geo, demographics<br>- Ad ID, campaign ID<br>- Past CTR/CVR stats<br>- Context (device, placement)<br>- Bid amount          | - Log transforms (e.g., bid, past CTR)<br>- Cross features (user × ad)<br>- Embeddings (user, ad IDs)<br>- Hashing/categorical encoding                    | - Feature Store (real-time and batch)<br>- Pub/Sub + materialized tables<br>- BigQuery / Hive for model input             |
| 3 | **Product Recommendation**          | - User ID, purchase history<br>- Product ID, category, price<br>- View/click/add-to-cart<br>- Similarity to past purchases             | - Product text/image → embeddings<br>- Time-based aggregation (last 7d clicks)<br>- Bucket price<br>- Popularity rank encoding                             | - Feature Store<br>- Offline store (Parquet, Delta Lake)<br>- Pre-computed session features stored in data lake           |
| 4 | **Friend Recommendation (Twitter)** | - User graph features (mutuals, 2-hop paths)<br>- User embeddings (activity, topics)<br>- Follow recency<br>- Tweet similarity metrics | - Graph-based embedding (Node2Vec, GraphSAGE)<br>- Text vectorization (tweets)<br>- Time decay for recency<br>- One-hot or dense embeddings                | - Graph DB (for online)<br>- Embedding store<br>- Offline ETL pipelines → TFRecords / Parquet                             |
| 5 | **Google Search Ranking**           | - Query text<br>- Document features (BM25, freshness, pagerank)<br>- Click-through rate<br>- Snippet quality<br>- Language match       | - TF-IDF/BERT for queries<br>- N-gram matching<br>- Positional relevance features<br>- Feature binning / quantization                                      | - Lookup stores for real-time<br>- Document index services<br>- Offline join tables used in ranking models                |
| 6 | **Centralized ML Platforms**        | - Model metadata (framework, size, latency)<br>- Dataset version, freshness<br>- Serving metrics (QPS, P99)<br>- Deployment frequency  | - Normalization (latency)<br>- Aggregation (last 7d success rate)<br>- Alert thresholds (feature drift)<br>- Tag encoding (pipeline, team)                 | - ML Metadata Store (e.g., MLMD)<br>- Feature Store (Feast)<br>- Monitoring tools (Prometheus, BigQuery)                  |
| 7 | **Ads Ranking Evaluation**          | - Serving features: bid, budget, position<br>- Engagement: CTR, CVR, ROI<br>- User context<br>- Historical A/B data                    | - Online vs offline join (post-click CVR)<br>- Grouped metrics (per advertiser)<br>- Normalization and smoothing<br>- Calibration of predicted vs observed | - Real-time logging store (Kafka, Pub/Sub)<br>- Offline warehouse (BigQuery, Hive)<br>- Feature Store for reproducibility |

#### 🧰 Common Feature Engineering Operations

| Operation Type     | Examples                             | Why It's Needed                          |
| ------------------ | ------------------------------------ | ---------------------------------------- |
| **Normalization**  | z-score, min-max on price, time      | Align scales; improves model convergence |
| **Aggregation**    | Rolling sums, averages (clicks/week) | Capture historical context               |
| **Embedding**      | User/item/product ID, text/tweets    | Capture semantic and ID-based patterns   |
| **Cross Features** | user × ad, category × price bucket   | Increase model expressiveness            |
| **Binning**        | Price into buckets, quantized scores | Reduce feature noise, improve robustness |
| **Recency/Decay**  | Time-weighted engagement             | Emphasize recent behavior over old       |

#### Where features are stored
| Storage Layer             | Usage                                          | Technologies                                        |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| **Offline Feature Store** | Model training (batch)                         | Feast (offline), Tecton, BigQuery, Hive, Delta Lake |
| **Online Feature Store**  | Real-time inference                            | Redis, Cassandra, DynamoDB, Tecton online store     |
| **Embedding Store**       | Storing dense embeddings for retrieval/ranking | Faiss, ScaNN, Milvus                                |
| **Data Warehouse**        | Logging, ETL, A/B analysis                     | Snowflake, BigQuery, Hive                           |
| **Event Stream Logs**     | Near-real-time features                        | Kafka, Pub/Sub, Kinesis                             |

###  Data Versioning and Quality Checks in Production ML Systems
| # | System                              | 🗂️ Data Versioning Needs                                                                                                        | ✅ Data Quality Checks                                                                                                                     |
| - | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**       | - Article content versioning (title, body)<br>- User event logs by timestamp<br>- Daily snapshot/versioned tables                | - Null/missing fields (e.g., article ID)<br>- Timestamp validation<br>- Label skew over time<br>- NDCG drift in offline eval              |
| 2 | **Ads Recommendation System**       | - Campaign config versioning (bids, creatives)<br>- Bid request schema versions<br>- Real-time vs delayed conversion joins       | - Invalid click/conversion joins<br>- CTR outliers / drop spikes<br>- Time lag consistency<br>- Bid/price sanity checks                   |
| 3 | **Product Recommendation**          | - Product catalog snapshot (e.g., nightly)<br>- Historical user interaction logs<br>- Backfilled feature tables versioned by run | - Missing product metadata<br>- Duplicates in catalog<br>- Invalid price buckets<br>- Add-to-cart → Purchase funnel drop issues           |
| 4 | **Friend Recommendation (Twitter)** | - Social graph versioning (timestamped edges)<br>- User embedding versioning (daily/hourly)<br>- Interaction log snapshots       | - Graph integrity (no loops on undirected edges)<br>- Broken/expired accounts<br>- Missing embeddings<br>- Label imbalance (rare follows) |
| 5 | **Google Search Ranking**           | - Query log versions (schema evolves)<br>- Index snapshot versioning<br>- Click/journey session stitching                        | - Query-spam filtering<br>- User-agent integrity<br>- Return-to-SERP vs dwell time mismatch<br>- Session gap time anomalies               |
| 6 | **Centralized ML Management**       | - Dataset, model, experiment versioning (with lineage)<br>- Feature set and schema versioning                                    | - Missing metadata fields<br>- Version skew (e.g., serving uses older features)<br>- Training-serving skew<br>- Drift in model inputs     |
| 7 | **Ads Ranking Evaluation**          | - A/B experiment logs versioned by bucket<br>- Conversion log joins (across delayed windows)<br>- Shadow model output snapshots  | - Invalid conversions (no click)<br>- Label leakage across buckets<br>- Budget pacing anomalies<br>- ROI divergence across variants       |


#### 🧬 Types of Data Versioning You Should Use
| Versioning Type          | Description                                           | Tools                                     |
| ------------------------ | ----------------------------------------------------- | ----------------------------------------- |
| **Feature versioning**   | Timestamped versions of feature sets (v1, v2)         | Feast, Tecton, Delta Lake                 |
| **Dataset versioning**   | Snapshots for training (daily/hourly)                 | DVC, Pachyderm, LakeFS                    |
| **Schema versioning**    | Capture changes in field names, types                 | Protocol Buffers, Avro, JSON schema       |
| **Label versioning**     | Track delay-windowed labels (e.g., CVR\@1d, @7d)      | Custom ETL pipelines + partitioned tables |
| **Embedding versioning** | Store model-specific embeddings with time/version tag | Faiss, Annoy, Milvus + metadata store     |

#### ✅ Data Quality Checks: Real-World Checks to Protect Your Models
| Category               | Check                                          | Example                                          |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------ |
| **Schema Checks**      | Field presence, type, range                    | `click_time` must be non-null & within 24h       |
| **Statistical Checks** | Distribution shift, mean/std deviation         | Drop in mean CTR from 0.12 → 0.01 signals error  |
| **Integrity Checks**   | Join correctness, cardinality constraints      | Conversions without prior clicks                 |
| **Temporal Checks**    | Freshness, latency, backfill consistency       | No training examples from future timestamps      |
| **Skew Checks**        | Training-serving skew, A/B split bias          | Features differ between offline/online           |
| **Label Leakage**      | Labels derived from future or improper sources | CVR labels joined from a post-ad exposure period |

#### 🔧 Recommended Tooling & Frameworks
| Function                      | Tools                                                              |
| ----------------------------- | ------------------------------------------------------------------ |
| Data versioning               | [DVC](https://dvc.org), LakeFS, Delta Lake, Pachyderm              |
| Data quality checks           | Great Expectations, Deequ, TensorFlow Data Validation (TFDV), Soda |
| Feature store with versioning | Feast, Tecton                                                      |
| Schema evolution              | Avro, Protobuf, JSON Schema                                        |
| Logging & lineage             | MLflow, MLMD, OpenLineage                                          |


# Modeling

### 🧠 Best-Suited Models and Tradeoffs for ML Systems
| # | System                              | 🧠 Best-Suited Model(s)                                                                                  | 🏗️ Model Architecture                                                                                                                 | ⚖️ Tradeoffs (Training, Inference, Serving)                                                                                               |
| - | ----------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**       | - Wide & Deep<br>- DLRM<br>- Two-Tower BERT<br>- DIN / DIEN                                              | - Sparse + Dense features<br>- Attention over click history<br>- Separate towers for user & item<br>- Sequence models (GRU, self-attn) | ✅ Captures both memorization & generalization<br>❌ Two-tower needs dense inference infra<br>❌ BERT-based models slow without distillation |
| 2 | **Ads Recommendation**              | - GBDT (XGBoost, LightGBM)<br>- Wide & Deep<br>- DLRM<br>- DeepFM                                        | - Tree-based or hybrid<br>- Embeddings for categorical features<br>- Cross-product features + MLP                                      | ✅ GBDTs fast to train + interpret<br>✅ Wide & Deep handles scale well<br>❌ DeepFM & DLRM need GPU, long tail support                      |
| 3 | **Product Recommendation**          | - Two-Tower with dot-product<br>- Deep Retrieval<br>- SASRec / BERT4Rec<br>- GraphSAGE                   | - User/item embedding tower<br>- Sequence model for user history<br>- Graph-based for co-view/co-buy                                   | ✅ Dot-product allows ANN search at scale<br>✅ Precomputed embeddings speed up serving<br>❌ Training is expensive (negative mining)        |
| 4 | **Friend Recommendation (Twitter)** | - Graph Neural Networks (GNNs)<br>- Two-tower with GraphSAGE<br>- Matrix factorization                   | - GNN layers for neighbor aggregation<br>- Embedding lookup with mutual connections<br>- MLP on top of graph signal                    | ✅ GNNs capture social structure<br>❌ Hard to scale GNNs to billions of nodes<br>✅ Two-tower can cache for real-time                       |
| 5 | **Google Search Ranking**           | - LambdaMART / XGBoost<br>- BERT reranker<br>- ColBERT / T5 Mono-Duo                                     | - BM25 retriever → BERT reranker<br>- Pairwise or listwise ranking<br>- Contextual query-doc matching                                  | ✅ Two-stage: retrieval + rerank saves latency<br>✅ BERT reranker improves quality<br>❌ Transformer-based models are slow to serve         |
| 6 | **Centralized ML Management**       | - Rule-based + Anomaly Detection<br>- XGBoost / Isolation Forest<br>- Time-series models (Prophet, LSTM) | - Lightweight tabular/temporal models<br>- Tree-based or recurrent<br>- Often unsupervised                                             | ✅ Cheap, interpretable<br>✅ Anomaly models can run on edge<br>❌ Drift detection hard to tune and explain                                  |
| 7 | **Ads Ranking Evaluation**          | - Logistic regression<br>- XGBoost<br>- Calibrated Deep CTR models<br>- Causal Forests (uplift)          | - Score prediction + calibration<br>- A/B testing + counterfactual logging<br>- Meta-learned reward estimation                         | ✅ Calibrated models give reliable ROI metrics<br>✅ Lightweight models easy to backtest<br>❌ Uplift modeling is noisy and data-hungry      |

#### ⚖️ Model Tradeoffs: Training vs Inference vs Serving
| Model Type                                    | ✅ Pros                                                         | ❌ Cons                                                     | Best Use Case                       |
| --------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------- |
| **GBDT (XGBoost, LightGBM)**                  | Fast to train, interpretable, CPU-friendly                     | Limited expressiveness for high-dim sparse data            | Ads, Tabular ranking                |
| **Wide & Deep**                               | Captures cross and generalization effects                      | Needs feature engineering + embeddings                     | Ads, News feeds                     |
| **DLRM / DeepFM**                             | Good for large-scale recs with sparse/dense mix                | Expensive training & inference; requires GPU               | Facebook, TikTok-style feed ranking |
| **Two-Tower**                                 | Efficient at inference (dot-product)<br>Scalable ANN retrieval | Needs offline embedding gen<br>No cross-tower interactions | Product/friend/news recs            |
| **Transformer Rerankers (BERT)**              | High quality, strong semantics                                 | Slow inference, large memory footprint                     | Search reranking, ads, QA           |
| **GNNs**                                      | Captures structural relationships                              | Complex graph infra, long training time                    | Friend recs, follow graph           |
| **Lightweight Models (LR, Isolation Forest)** | Fast, interpretable, low-cost                                  | Limited power for complex features                         | Monitoring, evaluation              |

#### 🛠️ Serving Resource Considerations
| Metric                   | GBDT | Wide & Deep | Two-Tower      | BERT Reranker    | GNN       |
| ------------------------ | ---- | ----------- | -------------- | ---------------- | --------- |
| **Train Time**           | Fast | Medium      | Medium         | Slow             | Very Slow |
| **Inference Latency**    | Low  | Medium      | Low (with ANN) | High             | High      |
| **Memory Use**           | Low  | Medium      | Medium         | High             | Very High |
| **Batching Feasibility** | Easy | Easy        | Easy           | Hard (per-query) | Hard      |


#### 📉 Loss Functions in ML System Models
| # | System                              | 🧠 Model(s)                         | 🎯 Learning Type           | 🔁 Common Loss Functions                                                                                            | 📌 Why This Loss?                                                                                                                            |
| - | ----------------------------------- | ----------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**       | Wide & Deep, DLRM, Two-Tower        | Pointwise + Pairwise       | - Binary Cross-Entropy (BCE)<br>- BPR (Bayesian Personalized Ranking)<br>- Softmax / ListNet<br>- Triplet Loss      | ✅ BCE works with click labels (1/0)<br>✅ BPR optimizes item ranking<br>✅ Triplet encourages user-pref > non-pref                             |
| 2 | **Ads Recommendation**              | GBDT, DLRM, DeepFM                  | Pointwise + Listwise       | - Logistic Loss (BCE)<br>- NDCG loss (LambdaRank/LambdaMART)<br>- Softmax with cross-entropy<br>- Weighted AUC loss | ✅ CTR/CVR naturally use BCE<br>✅ Ranking objective aligns with ad display slots<br>✅ NDCG-based losses better reflect page-level performance |
| 3 | **Product Recommendation**          | Two-Tower, SASRec, BERT4Rec         | Pairwise + Pointwise       | - BPR loss<br>- Contrastive loss<br>- BCE over clicks<br>- Hinge loss (for pairwise)                                | ✅ Negative sampling makes training scalable<br>✅ BPR suits implicit feedback<br>✅ Contrastive (SimCLR-style) for session encoders            |
| 4 | **Friend Recommendation (Twitter)** | GraphSAGE, Matrix Factorization     | Pairwise + Pointwise       | - BCE<br>- BPR / Hinge loss<br>- Graph contrastive loss                                                             | ✅ Graph-based rec often trained as link prediction<br>✅ BPR ensures followed users ranked higher than not-followed                           |
| 5 | **Google Search Ranking**           | LambdaMART, BERT Reranker           | Pairwise + Listwise        | - NDCG/RankNet/LambdaLoss<br>- Cross-entropy over relevance<br>- ListMLE, Softmax                                   | ✅ Listwise losses align with search result quality<br>✅ Pairwise (RankNet) used for re-ranking by relevance                                  |
| 6 | **Centralized ML Management**       | Isolation Forest, LSTM, Rule Models | Pointwise / Unsupervised   | - Reconstruction loss<br>- Forecast error (MSE)<br>- Z-score / anomaly thresholding                                 | ✅ No labels — losses focus on deviation from norm<br>✅ Time series use RMSE, MAE for drift                                                   |
| 7 | **Ads Ranking Evaluation**          | Logistic Regression, Uplift models  | Pointwise + Counterfactual | - BCE<br>- Uplift loss (difference of probabilities)<br>- Doubly Robust Estimators                                  | ✅ Predict click/conversion probability<br>✅ Uplift loss models treatment/control effect<br>✅ DR loss corrects for exposure bias in A/B logs  |

#### 🎓 Types of Ranking Losses
| Type                        | Loss Function              | Use Case                            |
| --------------------------- | -------------------------- | ----------------------------------- |
| **Pointwise**               | BCE, MSE, Poisson          | Binary labels (CTR prediction)      |
| **Pairwise**                | Hinge, BPR, RankNet        | Learn preference between pairs      |
| **Listwise**                | NDCG, LambdaLoss, ListMLE  | Optimize whole ranked list          |
| **Contrastive**             | Triplet loss, InfoNCE      | Representation learning / retrieval |
| **Uplift / Counterfactual** | Uplift loss, DR estimators | Ads evaluation, causal ML           |

#### 🔧 Loss Function & Model Pairing Summary
| Model                     | Common Loss                    |
| ------------------------- | ------------------------------ |
| **DLRM / Wide & Deep**    | BCE, cross-entropy             |
| **Two-Tower / DSSM**      | BPR, contrastive, triplet      |
| **GBDT / LambdaMART**     | Logistic loss, LambdaRank      |
| **Transformer Re-ranker** | ListMLE, softmax cross-entropy |
| **GraphSAGE / GCN**       | Link prediction (BCE), BPR     |
| **SASRec / BERT4Rec**     | Masked softmax, contrastive    |
| **Evaluation Models**     | Uplift loss, MSE, DR estimator |

# Evaluation

# Deployment
