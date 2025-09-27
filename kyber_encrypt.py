from cryptography.fernet import Fernet
import os
import datetime

class KyberEmulator:
    def __init__(self):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)
    
    def encrypt_file(self, input_file, output_file):
        try:
            with open(input_file, "rb") as f:
                data = f.read()
            encrypted_data = self.cipher.encrypt(data)
            with open(output_file, "wb") as f:
                f.write(encrypted_data)
            return self.key, output_file
        except Exception as e:
            print(f"[!] Encryption Failed: {e}")
            return None, None
    
    def save_key(self, key, filename):
        key_file = f"kyber_key_{datetime.datetime.now().strftime('%Y%m%d_%H%M%S')}.key"
        with open(key_file, "wb") as f:
            f.write(key)
        return key_file

if __name__ == "__main__":
    kyber = KyberEmulator()
    input_file = f"quantum_batch_{int(datetime.datetime.now().timestamp())}.js"
    output_file = f"encrypted_{input_file}"
    if not os.path.exists(input_file):
        with open(input_file, "w") as f:
            f.write("// ξ-Quantum Batch\nconsole.log('Oversoul Active');")
    key, encrypted_file = kyber.encrypt_file(input_file, output_file)
    if key:
        key_file = kyber.save_key(key, input_file)
        print(f"[✓] Encrypted: {encrypted_file}")
        print(f"[✓] Key Saved: {key_file}")