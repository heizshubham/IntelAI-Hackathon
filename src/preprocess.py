# src/preprocess.py

import pandas as pd
import numpy as np

def load_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_data(data):
    # Handle missing values
    data.fillna(method='ffill', inplace=True)  # Forward fill for simplicity

    # Encode categorical variables if necessary
    # Example: data = pd.get_dummies(data, columns=['your_categorical_column'])
    
    return data

def main():
    data = load_data('Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv')  # Adjust the path if necessary
    processed_data = preprocess_data(data)
    processed_data.to_csv('Monday-WorkingHours.pcap_ISCX.Monday-WorkingHours.pcap_ISCX.csv', index=False)

if __name__ == "__main__":
    main()
