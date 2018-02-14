# Import dependancies
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data
<<<<<<< HEAD
import sys
=======
>>>>>>> 69c77d7a6dbf8800d8b71dfc41adaf0fbe3b64a1

import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
# Dump the data set into tmp
mnist = input_data.read_data_sets("/tmp/data/", one_hot = True)

# The batch size takes n samples of data to run through the network 
# The model then will be trained on this batch and improve accuracy
<<<<<<< HEAD
# Also when using larger data sets you have to split them up -- 128
batch_size = int(sys.argv[2])

# How many times do we want to train the network -- 5
hm_epochs = int(sys.argv[1])
=======
# Also when using larger data sets you have to split them up
batch_size = 128

# How many times do we want to train the network
hm_epochs = 5
>>>>>>> 69c77d7a6dbf8800d8b71dfc41adaf0fbe3b64a1

# These are the entry points to the graph, x is the input, in this case images. Y is the labels
x = tf.placeholder('float', [None, 784])
y = tf.placeholder('float')

# Initialize xavier for the weights
init = tf.contrib.layers.xavier_initializer()

keep_prob_hl1 = tf.placeholder(tf.float32)
keep_prob_hl2 = tf.placeholder(tf.float32)


def neural_network_model(data):

<<<<<<< HEAD
	# Hidden layer 1 -- 200
	h1 = tf.layers.dense(inputs=x, units=int(sys.argv[3]), activation=tf.nn.relu, kernel_initializer=init)

	h_fc1_drop = tf.nn.dropout(h1, keep_prob_hl1)

	# Hidden layer 2 -- 500
	h2 = tf.layers.dense(inputs=h_fc1_drop, units=int(sys.argv[4]), activation=tf.nn.relu)
=======
	# Hidden layer 1
	h1 = tf.layers.dense(inputs=x, units=200, activation=tf.nn.relu, kernel_initializer=init)

	h_fc1_drop = tf.nn.dropout(h1, keep_prob_hl1)

	# Hidden layer 2
	h2 = tf.layers.dense(inputs=h_fc1_drop, units=500, activation=tf.nn.relu)
>>>>>>> 69c77d7a6dbf8800d8b71dfc41adaf0fbe3b64a1

	h2_fc2_drop = tf.nn.dropout(h2, keep_prob_hl2)

	# Output layer
	y_pred = tf.layers.dense(inputs=h2_fc2_drop, units=10)

	return y_pred

def train_neural_network(x):
	prediction = neural_network_model(x)

	cost = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(logits=prediction, labels=y))

	optimizer = tf.train.AdamOptimizer(learning_rate = 1e-3, beta1 = 0.9, beta2 = 0.999).minimize(cost)

	with tf.Session() as sess:
		sess.run(tf.global_variables_initializer())

		for epoch in range(hm_epochs):
			epoch_loss = 0
			for _ in range(int(mnist.train.num_examples/batch_size)):
				epoch_x, epoch_y = mnist.train.next_batch(batch_size)
				_, c = sess.run([optimizer, cost], feed_dict = {x: epoch_x, y: epoch_y, keep_prob_hl1: 0.5, keep_prob_hl2: 0.5})
				epoch_loss += c
			print('Epoch', epoch, 'completed out of', hm_epochs, 'loss:', epoch_loss)

		correct = tf.equal(tf.argmax(prediction, 1), tf.argmax(y, 1))
		accuracy = tf.reduce_mean(tf.cast(correct, 'float'))
		print('Accuracy:', accuracy.eval({x:mnist.test.images, y:mnist.test.labels, keep_prob_hl1: 1.0, keep_prob_hl2: 1.0}))

		saver = tf.train.Saver()
		saver.save(sess, 'model/model.ckpt')

train_neural_network(x)