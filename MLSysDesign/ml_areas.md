# Problem Navigation
- What is the Primary function?
-   select and show best( == highest expected value) something that maximizes platforms objective function.
-  What is the Primary Metric and the formula?

personalized news ranking systems.
ads recommendation system.
product recommendation system.
friend recommendation system for Twitter.
Google Search Ranking.
Centalized ML Management Platforms.

| # | System                                   | 🎯 Primary Function                                | ✅ Primary Metric(s)                                                      | 🧪 Secondary Metric(s)                                                                                     | 🛡️ Guardrail Metric(s)                                                                                     |
| - | ---------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1 | **Personalized News Ranking**            | Rank news articles for user interest               | NDCG\@k  <br> DCG:  $\sum_{i=1}^{k} \frac{2^{rel_i} - 1}{\log_2(i+1)}$   | - Dwell Time  <br>- Scroll Depth <br>- Click Diversity                                                     | - Bounce Rate <br>- Clickbait Score <br>- Time-on-site Stability <br>- Abuse Violation Rate                 |
| 2 | **Ads Recommendation System**            | Show high-ROI ads for user/ad relevance            | eCPM = CTR × Bid × Quality <br> or NDCG / CTR                            | - Post-click Engagement <br>- CVR (Conversion Rate) <br>- RPM (Revenue per 1000 views)                     | - Advertiser ROI <br>- Ad Fatigue <br>- User Complaints <br>- Ad Block Rate                                 |
| 3 | **Product Recommendation System**        | Recommend relevant products to increase conversion | MAP, AUC, Conversion Rate                                                | - Add-to-Cart Rate <br>- Repeat Purchase <br>- Revenue/User <br>- View Diversity                           | - Cart Abandonment <br>- Category Fairness <br>- Inventory Pressure <br>- CTR Saturation                    |
| 4 | **Friend Recommendation (Twitter)**      | Suggest relevant people to follow                  | Precision\@k, MRR <br> MRR: $\frac{1}{Q} \sum \frac{1}{\text{rank}_{q}}$ | - Follow-back Rate <br>- Social Engagement <br>- Diversity of Connections                                  | - Block/Mute Rate <br>- Abuse/Spam Reports <br>- Echo Chamber Risk <br>- Post-follow Churn                  |
| 5 | **Google Search Ranking**                | Return most relevant results to query              | NDCG\@k, Return-to-SERP Rate                                             | - Click-through Rate (CTR) <br>- Long Click Rate <br>- Query Reformulation Rate                            | - Return-to-SERP Rate <br>- Spam/Low-Quality Score <br>- Latency (P99) <br>- Ads Cannibalization            |
| 6 | **Centralized ML Management Platforms**  | Manage, deploy, monitor ML systems                 | Model Accuracy <br> Latency (P99) <br> Success Rate                      | - Resource Utilization <br>- Throughput <br>- Drift Alerts <br>- Time to Deployment                        | - Accuracy Drop <br>- SLA Misses <br>- Rollback Rate <br>- Data Staleness                                   |
| 7 | **Evaluation Framework for Ads Ranking** | Assess quality & ROI of ad ranking pipelines       | ROI, NDCG, CTR, CVR, AUC                                                 | - Calibration Accuracy <br>- Lift over baseline <br>- Profit-per-mille (PPM) <br>- Budget Utilization Rate | - Underdelivery / Overdelivery <br>- Pacing Errors <br>- Fairness Across Advertisers <br>- Revenue Dilution |



## Design a personalized news ranking systems.
- To show the best news article to a user at a given opportunity

## Design ads recommendation system.
- Select the best ad to show to a user at a given opportunity
- Primary Metric: Ads Score

## Design a product recommendation system.
- To show a best product to a user at a given opportunity

## Design a friend recommendation system for Twitter
- To show best friend recommendation to a user at a given opportunity

## Design a Google Search Ranking
- To select best matchin URLs to the query and show it to a user at a given opportunity

## Design a Centalized ML Management Platforms
- 

## Design an evaluation framework for ads ranking.


# Training Data

# Feature Engineering

# Modeling

# Evaluation

# Deployment
