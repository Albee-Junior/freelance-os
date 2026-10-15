import styles from "./ClientProfileCard.module.css";

function ClientProfileCard({ client }) {
  return (
    <div className={styles.card}>
      <h3>{client.name}</h3>
      <p>{client.email}</p>
      <p>{client.company}</p>
      <p
        className={`${styles.status} ${client.status === "active" ? styles["active"] : styles["inactive"]}`}
      >
        {client.status}
      </p>
    </div>
  );
}

export default ClientProfileCard;
