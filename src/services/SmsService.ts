import api from "../api";
import { authenticator } from "otplib";

authenticator.options = {
  digits: 4,
};

class SmsService {
  async send(phone: string, message: string) {
    return api.post(
      `/sys/send.php?login=mansurmsk@icloud.com&psw=PassForSms95&phones=+79064914586&mes=${message}&sender=FINDCOURIER`
    );
  }
}

export default new SmsService();
