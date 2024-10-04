from flask import Flask, request, jsonify
import tensorflow as tf  # or any other ML framework

app = Flask(__name__)

# Load your model
model = tf.keras.models.load_model('model.h5')

# Define an API route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Get data sent by the client
    # Process the input data
    input_data = data['input']
    # Make a prediction using the model
    prediction = model.predict(input_data)
    # Return the prediction as a JSON response
    return jsonify({'prediction': prediction.tolist()})

if __name__ == "__main__":
    app.run(debug=True)
