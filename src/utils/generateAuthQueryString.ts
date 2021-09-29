import MD5 from "crypto-js/md5";

const generateAuthQueryString = () => {
  try {
    const timestamp = new Date().getTime();
    const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY!;
    const private_key = process.env.REACT_APP_MARVEL_PRIVATE_KEY!;
    const hash = MD5(timestamp + private_key + public_key).toString();

    return `ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
  } catch (error) {
    return ``;
  }
};

export default generateAuthQueryString;
