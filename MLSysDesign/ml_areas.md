# Problem Navigation
- What is the Primary function?
-   select and show best( == highest expected value) something that maximizes platforms objective function.
-  What is the Primary Metric and the formula?

    - perrsonalized news ranking systems.
    - ads recommendation system.
    - product recommendation system.
    - friend recommendation system for Twitter.
    - Google Search Ranking.
    - Centalized ML Management Platforms.

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

# Evaluation

# Deployment
