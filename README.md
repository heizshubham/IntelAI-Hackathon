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

**⚙️ How to Run the Project**
#Prerequisites
Ensure you have the following installed:

-> Python 3.8+
-> Suricata 6.0+
-> Libraries: scikit-learn, pandas, joblib, matplotlib


**🔧 Installation**

1. Clone the repository:

~ git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install required Python packages:

~ pip install -r requirements.txt

**🚀 Running Suricata IDS/IPS**
1. Install and configure Suricata:
  ~ Follow the Suricata Installation Guide.
  ~ Configure suricata.yaml for JSON output logging.

2. Start Suricata on your network interface:
  ~ sudo suricata -c /etc/suricata/suricata.yaml -i eth0


**🧑‍💻 Running the Machine Learning Pipeline**
1. Train the Model:
  ~ python src/train_model.py
2. Run Predictions on new data:
  ~ python src/predict.py --input ../data/sample_network_data.csv
3. Launch Dashboard:
  ~ python src/dashboard.py


**🎯 Results**
Our AI-enhanced firewall achieved remarkable accuracy in detecting and blocking threats:

Metric	    Score
Accuracy	98.5%
Precision	97.8%
Recall	    96.3%
F1-Score	97.0%


**🗂️ Project Directory Structure**
ML-Enhanced-Suricata-IDS/
├── data/                   # Datasets
├── src/                    # Source code
│   ├── model.py            # ML model code
│   ├── train_model.py      # Model training script
│   ├── predict.py          # Inference script
│   ├── dashboard.py        # Dashboard server
├── models/                 # Saved models
├── docs/                   # Documentation
├── README.md               # Readme file
├── requirements.txt        # Required packages
└── LICENSE                 # License for the project


**🌟 Future Enhancements**
-> Global Threat Intelligence Integration: Connect with real-time threat feeds.
-> Anomaly Detection: Implement unsupervised learning models.
-> Multi-Factor Authentication: Enhance system security.
-> Model Optimization: Fine-tune models using hyperparameter optimization.




**🧑‍💻 Team Members**
~ Mohamad Ibrahim - ML Developer

Sarvesh - Suricata Configuration Expert

Priyadharshan - Firewall & Security Analyst

Shubham Pandey - web Developer & Visualization Developer


**📜 License**
This project is licensed under the MIT License - see the LICENSE file for details.





**🙌 Acknowledgments**

~ Huge thanks to the IntelAI Hackathon 2024 organizers and KPR College Coimbatore for hosting the event.

~ Special mention to the Suricata community for their groundbreaking work on IDS/IPS technologies.







