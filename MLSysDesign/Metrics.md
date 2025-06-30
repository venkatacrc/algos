# 📊 ML/AI-Driven Advertising Metrics Dashboard

## 🛍️ Performance Metrics (Advertiser KPIs)

| Metric                         | Definition / Goal                                  | Owner        | Target Trend |
|-------------------------------|----------------------------------------------------|--------------|--------------|
| Conversion Rate (CVR)         | % of clicks resulting in a conversion              | Advertiser   | ↑            |
| Click-Through Rate (CTR)      | % of impressions that were clicked                 | Advertiser   | ↑            |
| Cost Per Acquisition (CPA)    | Total cost ÷ conversions                           | Advertiser   | ↓            |
| Return on Ad Spend (ROAS)     | Revenue ÷ ad spend                                 | Advertiser   | ↑            |
| Customer Acquisition Cost     | Cost to acquire one paying customer                | Advertiser   | ↓            |
| Incremental Lift              | Performance improvement over baseline/control      | Advertiser / DS | ↑         |

## 🧠 ML Model Quality Metrics

| Metric                         | Definition / Goal                                  | Owner        | Target Trend |
|-------------------------------|----------------------------------------------------|--------------|--------------|
| AUC-ROC / AUC-PR               | Classification quality, esp. for rare events       | ML Team      | ↑            |
| Log Loss                      | Penalizes incorrect or unconfident predictions     | ML Team      | ↓            |
| Calibration                   | Predicted probability alignment to actual outcomes | ML Team      | Close to 1:1 |
| NDCG / MAP / MRR              | Ranking relevance of top-k results                 | ML Team      | ↑            |
| CTR@k / CVR@k                 | CTR or CVR at top-k ranked ads                     | ML Team      | ↑            |

## ⚙️ System & Infrastructure Metrics

| Metric                         | Definition / Goal                                  | Owner            | Target Trend |
|-------------------------------|----------------------------------------------------|------------------|--------------|
| Latency (P50, P95)            | Time to serve an ad or model result                | Infra / Platform | ↓            |
| Throughput (QPS)              | Requests or predictions handled per second         | Infra / Platform | ↑            |
| Error Rate                    | % of failed responses or serving errors            | Infra / Platform | ↓            |
| Budget Pacing Accuracy        | Ad budget utilization smoothness over time         | Infra / Platform | ↓            |

## 🧪 Causal Impact & Attribution Metrics

| Metric                         | Definition / Goal                                  | Owner        | Target Trend |
|-------------------------------|----------------------------------------------------|--------------|--------------|
| Uplift Score                  | Estimated improvement due to ad exposure           | Data Science | ↑            |
| Attributable Revenue          | Revenue linked to ad exposure via models           | Data Science | ↑            |
| Shapley Attribution           | Fair credit to each touchpoint in conversion path  | Data Science | ↑            |

## 🧭 Trust, Fairness & Privacy Metrics

| Metric                         | Definition / Goal                                  | Owner            | Target Trend |
|-------------------------------|----------------------------------------------------|------------------|--------------|
| Demographic Fairness Score    | Targeting parity across user groups                | ML / DS          | Close to 0   |
| Brand Safety Violation Rate   | Ads served near unsafe or inappropriate content    | Policy / Safety  | ↓            |
| Privacy Leakage / DP Budget   | Privacy guarantees in ML models                    | ML / Privacy     | Within bounds|
