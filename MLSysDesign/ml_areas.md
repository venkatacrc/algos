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



# Training Data

# Feature Engineering

# Modeling

# Evaluation

# Deployment
