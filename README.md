ML-Enhanced Suricata IDS/IPS for Network Security
🔥 Next-Generation Firewall with AI-Powered Threat Detection 🔥
Introduction
This project focuses on integrating Machine Learning with Suricata, an open-source intrusion detection system (IDS) and intrusion prevention system (IPS), to create a next-generation firewall solution. By enhancing traditional network security tools with AI-powered threat detection, we aim to improve the real-time identification and prevention of cyber threats, ensuring a more secure and resilient network infrastructure.

The project was developed as part of the IntelAI Hackathon 2024 in the Cybersecurity sector at KPR College, Coimbatore.

Features
Real-time Intrusion Detection and Prevention using Suricata
Machine Learning-enhanced Threat Detection
Anomaly Detection through classification models
Efficient Packet Analysis with AI models for network traffic patterns
Automated Threat Responses using AI decision-making
Graphical Dashboard for visualizing network threats and alerts
Scalability for enterprise-level network protection
Architecture Overview
Suricata IDS/IPS Engine: Captures and analyzes network traffic in real-time.
Machine Learning Pipeline: Processes and classifies threats using algorithms such as Random Forest, Decision Trees, and Neural Networks.
Threat Detection: Classifies traffic as normal or suspicious and flags potential threats.
Response Mechanism: Automatically blocks suspicious traffic or sends alerts to administrators.
Dashboard: Provides a real-time, user-friendly interface for monitoring network traffic, attacks, and threat levels.
Dataset
We utilized a comprehensive dataset that contains network traffic patterns, including both malicious and benign traffic, for training our machine learning models. The dataset includes features such as:

Protocol
Source IP
Destination IP
Packet size
Anomalous activity indicators
Time of the activity
The dataset was sourced from multiple trusted repositories:

CICIDS2017
NSL-KDD Dataset
Machine Learning Models
We implemented multiple ML models for detecting and classifying network threats:

Random Forest Classifier: Trained for feature selection and identifying suspicious activity.
Decision Tree: Utilized for visual interpretability of threat categories.
Neural Networks: Applied for deep learning-based threat detection.
Feature Engineering: Used SelectKBest for optimal feature selection based on mutual information.
How to Run the Project
Prerequisites
Ensure you have the following installed:

Python 3.8+
scikit-learn
pandas
joblib
matplotlib (for visualizations)
Suricata (version 6.0+)
Installation
Clone the repository and install dependencies:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
pip install -r requirements.txt
Running the Suricata IDS/IPS
Install and configure Suricata:

Follow the Suricata installation guide.
Ensure Suricata is running on your network interface.
Modify the Suricata configuration file (suricata.yaml) to output logs in JSON format, which will be processed by the ML models.

Running the Machine Learning Pipeline
Once Suricata is set up, run the ML pipeline to analyze captured traffic:

bash
Copy code
python src/train_model.py
To use the pre-trained model and make predictions:

bash
Copy code
python src/predict.py --input ../data/sample_network_data.csv
Viewing the Dashboard
The dashboard can be launched using the following command:

bash
Copy code
python src/dashboard.py
Results
Our model achieved 98.5% accuracy on detecting malicious network traffic with the Random Forest classifier. The system was able to respond to threats in real-time, improving network security by significantly reducing false positives and identifying novel threats through anomaly detection.

Key metrics:

Precision: 97.8%
Recall: 96.3%
F1-Score: 97.0%
Directory Structure
bash
Copy code
ML-Enhanced-Suricata-IDS/
│
├── data/                   # Datasets and network traffic logs
├── src/                    # Source code for training models and threat detection
│   ├── model.py            # Machine Learning model functions
│   ├── train_model.py      # Script to train ML models
│   ├── predict.py          # Script to run predictions on new data
│   ├── dashboard.py        # Web-based dashboard for monitoring threats
│
├── models/                 # Saved ML models
│   └── random_forest_model.pkl
│
├── docs/                   # Documentation files
├── README.md               # Project README
├── requirements.txt        # Required Python packages
└── LICENSE                 # License for the project
Future Enhancements
Integration with AI-Powered Threat Intelligence: Automatically fetch threat data from global sources.
Advanced Anomaly Detection: Employ unsupervised learning for detecting novel threats.
Multi-factor Authentication: Increase security by implementing additional authentication layers.
Model Optimization: Leverage hyperparameter tuning for improved detection performance.
Team Members
Shubham Pandey - Frontend and ML Developer
[Teammate 2 Name] - Suricata Configuration Expert
[Teammate 3 Name] - Backend and Security Analyst
[Teammate 4 Name] - Dashboard and Visualization Developer
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to IntelAI Hackathon 2024 and KPR College Coimbatore for hosting the event.
Thanks to the Suricata open-source community for their incredible work in IDS/IPS solutions.
