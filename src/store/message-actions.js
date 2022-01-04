import { fetchActions } from "./fetch-slice";
import { MESSAGE_URL } from "../config/config";
import { toast } from "react-toastify";
export const fetchMessageData = (body) => {
  return async (dispatch) => {
    dispatch(
      fetchActions.showFetchInfo({
        status: "pending",
        title: "Sending...",
        message: "Sending Message",
      })
    );

    const sendRequest = async (body) => {
      const res = await fetch(MESSAGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Something went wrong!");

      if (res.status === 200) {
        toast.success("Messege sent succesfully");
      }

      const data = await res.json();

      return data;
    };

    try {
      const data = await sendRequest(body);
      dispatch(
        fetchActions.showFetchInfo({
          status: "success",
          title: "Success...",
          message: "Message sent succesfully",
        })
      );
      console.log(data);
    } catch (e) {
      dispatch(
        fetchActions.showFetchInfo({
          status: "errro",
          title: "Error...",
          message: "Message didnot send",
        })
      );
    }
  };
};
