import jwt from 'jsonwebtoken';
import { Decrypt, Encrypt } from '../../data/protocols/cryptography';

export class JwtAdapter implements Encrypt, Decrypt {
  constructor(private readonly secret: string) {}

  async encrypt(plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret);
  }

  async decrypt(cipherText: string): Promise<any> {
    return jwt.verify(cipherText, this.secret) as any;
  }
}
