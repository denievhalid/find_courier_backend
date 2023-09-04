import api from "../api";
import { authenticator } from "otplib";

authenticator.options = {
  digits: 4,
};

class SmsService {
  async send(phoneNumber: string, message: string) {
    return api.post(
      `/sys/send.php?login=mansurmsk@icloud.com&psw=PassForSms95&phones=${phoneNumber}&mes=${message}&sender=FINDCOURIER`
    );
  }
}

export default new SmsService();
