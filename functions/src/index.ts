import * as cors from "cors";
import * as functions from 'firebase-functions';
import * as request from 'request';

const corsHandler = cors({origin: true});

export const imageProxy = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {
    const imageUrl = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${req.query.id}&type=card`;
    request(imageUrl).pipe(res);
  });
});
