# 🚀 **ML-Enhanced Suricata IDS/IPS for Network Security** 🚀

#### 🔐 **Next-Generation Firewall with AI-Powered Threat Detection** 🔐

![Firewall Image](https://example.com/firewall-image.png)

## 📜 **Introduction**

Our project integrates **Machine Learning (ML)** with **Suricata**, an open-source intrusion detection (IDS) and intrusion prevention system (IPS), to deliver an **AI-driven firewall solution**. This system enhances the detection of security threats by analyzing network traffic patterns, leveraging ML models to predict and identify intrusions in real-time.

🛡️ **IntelAI Hackathon 2024** | 🏫 **KPR College Coimbatore** | **Cybersecurity Sector**

---

## ✨ **Features**

- **⚡ Real-Time IDS/IPS**: Enhanced with AI to identify and prevent threats.
- **🧠 ML-Based Anomaly Detection**: Using Random Forest and Neural Networks.
- **📊 Dashboard**: Visual representation of traffic and threats.
- **🔒 Threat Response**: Automated, intelligent blocking of malicious traffic.
- **📈 Scalable**: Designed for enterprise-level network security.

---

## 📐 **Architecture Overview**

mermaid
graph LR;
    A[Suricata IDS/IPS] --> B[Network Traffic Capture]
    B --> C[Feature Extraction]
    C --> D[ML Model for Threat Detection]
    D --> E[Real-Time Threat Alerts/Blocking]
    E --> F[Dashboard Visualization]


1. Suricata IDS/IPS Engine captures and inspects network traffic.
2. ML Pipeline processes traffic logs for real-time anomaly detection.
3. Automated Responses: Malicious activity is blocked or flagged.
4. Dashboard: Shows real-time traffic, threats, and alerts.



## **📊 Dataset**
**We used the CICIDS2017 and NSL-KDD datasets for training the machine learning models, providing a wide variety of malicious and benign traffic patterns.**

-> Features Used:
-> Protocol
-> Source IP & Destination IP
-> Packet Size
-> Time of Activity
-> Anomalous Indicators




**💻 Machine Learning Models**
**🧠 Models Implemented:**
-> Random Forest Classifier
-> Decision Trees
-> Neural Networks

**🛠 Feature Engineering:**

--> Used SelectKBest for optimal feature selection based on mutual information.

**Evaluation Results:**

-> Accuracy: 98.5%
-> Precision: 97.8%
-> Recall: 96.3%
-> F1-Score: 97.0%
