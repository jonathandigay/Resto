import React from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthProvider";
const CartHeader = () => {
  const Router = useRouter();
  const { currentUser } = useAuthContext();
  const Path = Router.asPath;
  return (
    <div className="cart-header">
      <ul>
        <li
          onClick={() =>
            Router.replace(`/cart/pending/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/cart/pending/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Pending
        </li>
        <li
          onClick={() =>
            Router.replace(`/cart/rejected/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/cart/rejected/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Rejected
        </li>
        <li
          onClick={() =>
            Router.replace(`/cart/approved/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/cart/approved/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Approved
        </li>

        <li
          onClick={() =>
            Router.replace(`/cart/completed/${currentUser && currentUser.uid}`)
          }
          className={`${
            Path == `/cart/completed/${currentUser && currentUser.uid}` &&
            "active"
          }`}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default CartHeader;
