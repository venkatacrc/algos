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
- Gaurdrail Metrics: To maintain a good user experience, I will track secondary guardrails like **page load latency, Ad fatigue/Ad freshness/Diversity, and Fairness and Spam/Policy Compliance**.
  
-   Ad Revenue = $\sum\text{(CTR x Bid) x (payout rate)}$ 
-   Rank Ads by expected revenue:
-   Score = $p\text{(Click | User, Ad, Context) x Bid}$

### System Architecture

1. **Offline Pipeline:**
    * Collect logs: `Impressions`, `Clicks`, `User context`, `Ad metadata`, `Page dwell time`, etc.
    * Preprocess & label: `clicked = 1, not clicked = 0`
    * Join features various sources (user profile, ad features, context).
    * Generate Training dataset.
    *  Feature logs -> Traning data -> Model Traning
    *  Embedding generation (user/ad/context) for fast lookup
  
2. **Online Serving System:**
    * Real-time user request
    * **Retrieval** top candidate ads (retrieval step)
    * Feature enrichment( user features, context, real-time stats)
    * **Ranking** using prediction:
    *   $\text{Score = p(Click | user, ad, context) x Bid}$
    *   Returned Ranked list
   
3. **Monitoring & Feedback Loop:**
   * Log impressions/clicks -> used forretraining (with delay)
   * Add guardrail monitoring(latency/fairnessclick distribution)
