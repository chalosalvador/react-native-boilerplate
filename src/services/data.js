/**
 * Created by chalosalvador on 25/2/21
 */
import axios from "axios";

const Data = {
  async getData() {
    const response = await axios.get(
      "https://stormy-badlands-60158.herokuapp.com/api/articles"
    );
    // console.log("data", response.data.data);
    return response.data.data;
  },
};

export default Data;
