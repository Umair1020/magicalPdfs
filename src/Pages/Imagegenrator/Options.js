import styles from "./ImageGenerator.module.css"; // Import CSS module

export default function Option({ title, values, onAppend }) {
  return (
    <div>
      <h3 className="font-bold text-sm mb-4 mt-6">{title}</h3>
      <div className={styles.buttonWrapper}>
        {values.map((value) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "black",
                  color: "white",
                  padding: "5px 15px",
                  borderRadius: "50px",
                  cursor:"pointer"
                }}
                key={value}
                onClick={() => {
                  onAppend(value);
                }}
              >
                <span>
                  <div> {value}</div>
                </span>
              </div>

    
            </>
          );
        })}
      </div>
    </div>
  );
}
