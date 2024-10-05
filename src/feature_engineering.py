# src/feature_engineering.py

import pandas as pd

def feature_engineering(data):
    # Example of creating additional features
    data['packet_ratio'] = data['bytes'] / data['packets']  # Example feature
    # Add more feature engineering as needed
    
    return data

def main():
    data = pd.read_csv('Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv')
    engineered_data = feature_engineering(data)
    engineered_data.to_csv('Monday-WorkingHours.pcap_ISCX.Monday-WorkingHours.pcap_ISCX.csv', index=False)

if __name__ == "__main__":
    main()
