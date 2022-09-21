import numpy as np
import matplotlib.pyplot as plt

N = 1500

a = np.convolve(np.ones(N), 2*np.random.random(N))
c = np.sin(np.linspace(0, 30, N))
b1 = [np.exp(-2*n/400)*a[n]*c[n] for n in range(N)]
b2 = [np.exp(-n/200)*a[n]*c[n] for n in range(N)]

plt.figure(figsize=(16, 10))
plt.plot(b2, color='grey', linewidth=30)
# plt.axis('off')
plt.xticks([])
plt.yticks([])
ax = plt.gcf().gca()
# ax.set_facecolor('#222629')
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['bottom'].set_visible(False)
ax.spines['left'].set_visible(False)
plt.savefig('./assets/css/wavelarge_grey.png')
plt.show()

# plt.figure(figsize=(16, 5))
# plt.plot(b1, color='grey', linewidth=20)
# # plt.axis('off')
# plt.xticks([])
# plt.yticks([])
# ax = plt.gcf().gca()
# # ax.set_facecolor('#222629')
# ax.spines['top'].set_visible(False)
# ax.spines['right'].set_visible(False)
# ax.spines['bottom'].set_visible(False)
# ax.spines['left'].set_visible(False)
# # plt.savefig('./assets/css/wavelarge_grey.png')
# plt.savefig('./assets/css/wavetitle_grey.png', bbox_inches='tight')
# plt.show()