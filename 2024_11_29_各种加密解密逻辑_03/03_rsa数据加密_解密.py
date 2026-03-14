# 有兴趣可以研究下 rsa库, https://stuvel.eu/python-rsa-doc/usage.html#generating-keys
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5, AES  # 这玩意是用来加密的
import base64

# # 加密
# s = "我特别爱你"
# # 1. 先加载公钥
# f = open("public.txt", mode="rb")
# pub_key_bs = f.read()
# f.close()
# rsa_key = RSA.import_key(pub_key_bs)  # 导入公钥
# # 得到的rsa_key只能用来加密
# # 2. 进行加密
# rsa_cipher = PKCS1_v1_5.new(key=rsa_key)
# result = rsa_cipher.encrypt(s.encode("utf-8"))
# print(base64.b64encode(result).decode())

# 解密
s = 'gVlYLz9s/mrILIEeP5zVgAU/7BMLXiDtsvTwK5s5kqfIxrkjnVgLCJnq0IMyJmqnas+ymrNNx/aRnxdvK9S+NgtcstyqdFvp+mtt+ZIhTpsC/1wbplX+3pnlrsFQcKzTbtBtl3XEaUOw6hnGrS9G0DatlRA3twgGcQd0KKSO0ibvEEUIfieRI345S2W9vsdtnaAQZksH9B4xryCGs6z/cSgSH2nGJuA4V0fccNj1a5NtcrHSxClyabMsaY3wR47oVOK/ma8x4baarEbZS96VrU2bn7rr3l5sySE3X/oE9fDg/dFfQtOPu8a/PH+d8n4o6bksQNutiakHXgrEYk4xVA=='
# 1. 加载秘钥, 私钥
# f = open("private.txt", mode="rb")
rsa_key = RSA.import_key(base64.b64decode('MIIEowIBAAKCAQEAp9klAzVIHt2MLVdjdtSb2MAeioBPbJtUg6tWHybZtFwb/KK1J+AapWyiBAV2FWs7ruiK0HuXmXH5HijtLI4LqUOUNBMtVH/BoCJkj22+iQJg5+o3uqvRoEXceIUgqdXpcz+1dvJCQvDOMP8U1bhd9u4pzOroNZIic9ifzX1D6pGVPzhNPAHc+105AUkKOysGibQYzz148vO+Gxzx5XFtYUtNjDrvfojtEs4hb9aSTjCGkaiupJu4HhyXP9wQ0JUGvQQlvHYTHA+WOPwijOQSS0dPdxmHwSsMguvRRpXQya4OPXnvc+6ydgMZ1TC/DCGGWlaNQm7t0JfiwY6iuA1ipwIDAQABAoIBAB4D2zYNJ6X5WVFcYLmFwI7MoEmFM27JAh5/m6l7cY/qrsiJMhr83Nb7K6fLcDfZUrVu+S/aAhybAIDvsaX3isdMgeqkCUWkiPQBYnkxl1J53elq/WdAxX5DL+9PYy1rxtDosiMgpE/DLyQc4VVsoEUBhvERis/Vn5qWwNDm1yfRcR26KKl2pWTHyJE50xd2DnBEhZUojSIjfFpiPFFZz881oxpDsUPDuayNERVU3GKMBZWodR8ptsQ//1rCuUqUvIoN5LayYCk8KoFRPw8o8WCr+rTBoP1CqcuB1CnamSSbP2TANL2HD0DmPMdxvxk5KXg5OjmqHh94mP/9sGrvV10CgYEAtj6WHQ6YtN0g5CBWfzmSdApnjAS8mmD1iuTY6sYSRbYWMrO0SawT3Y7kGgD3/oZgsSIOqXMWoNPLXvsLpwkE5D13O7ZURncGHRaYyMsJ0iPszEvhTuBmvvmUWgaD/hscj3oavboAP/qjtjROO2s84QxxSFnrargK5tGFaQULRxUCgYEA68cJN7BkJYrJBU/cxMFfH/ktmbJlS8ZfQ4V1f/uv0jQz7e0H7jEmpGiPcHYAsVkp1rtSngWbMtYXQS+42nc7OYmI2zNsaRPdsVQF30fESSPW/iJVLo8kw7Vdi65olk/NAkvk7xYVnj9E69136jKFXoK1vOY8BYNfqJnhIgG9McsCgYEAiRFbf/E5g1aJZWq5A6k+cE5fAN2TKJ1iMBvc1f8xQQMpgOrN31cv/cR55ODzpJhW4wLVejbYPw/sdrxkUDYlWrCsG9oPWowsqfYT5XloIofokuNDSzrVrC80l90sqxKjEXpp4Gajx3rwZJrEeEY4nJ7qGNughzxy3pWZPJqRl90CgYAJgFbVwKz4elRJe4NpBmXf8vmsdOzyFcdnACzRAIKAVQw2rVOhfKeS/oexP4AdpXszJQ9aQN2VOd1sChFH9IAVfH5gXv0iauOHLtyht9GoJOKYESgfnTMdE+T2KQwb6pFXY1mRbPFoFCKh4qXfcTPAsEHEn/6RNk8Xi0PwS+Ok6wKBgE4aH1QdO8iKQvGLBeErBe6Yau946YEz+R/mcq2Bf3CLdgxpLl4oiwd/OES8ATRydo0LAoqxzy69lig9v3/6H8MWF1dDSx78/o/fL6Z80HjL4SvylCccSkInRwZ0i73Q+WX/XK4gaduerXU5uwlErz1eHqVq0IpPKfL/pGH50+o8'))
# f.close()
# 2. 创建加密器. 解密
rsa_cipher = PKCS1_v1_5.new(key=rsa_key)
ming = rsa_cipher.decrypt(base64.b64decode(s), None)
print(ming.decode("utf-8"))
