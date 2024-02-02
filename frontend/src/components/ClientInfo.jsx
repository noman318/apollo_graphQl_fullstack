import React from "react";
import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

const ClientInfo = ({ client }) => {
  return (
    <div>
      <h5 className="mt-5">Client Information</h5>
      <ListGroup>
        <ListGroup.Item>
          <FaIdBadge className="m-2" />
          {client?.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <FaEnvelope className="m-2" />
          {client?.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <FaPhone className="m-2" />
          {client?.phone}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ClientInfo;
