## Question: Design a system to generate and rank the most relevant ads for a user's Facebook feed in real-time.

- Challenge: Maximize ad relevance while minimizing latency and ensuring user engagement.
## End to End Design
-   Problem clarification (metrics, constraints)
-   High-level system architecture
-   Offline Vs Online components
-   ML model(s) design & features
-   Serving & Latency trade-offs
-   A/B Testing& Experiment Feedback loops
-   Scalability, Privacy, Fairness, and Bias considerations

### Problem Definition

- Primary Metrics: I will optimize for **expected ad revenue**, using CTR x bid as the core ranking signal.\
- Secondary Metrics: To balance user experience to avoid low-quality ads with high bids. I will use **engagement quality or user feedback**.
- Gaurdrail Metrics: To maintain a good user experience, I will track secondary guardrails like **page load latency, Ad fatigue/Ad freshness/Diversity, and Fairness and Spam/Policy Compliance.
  

Ad Revenue = $\sum_(CTR x Bid) x payout rate$ 
Rank Ads by expected revenue:
Score = $p(Click | User, Ad, Context) x Bid$
