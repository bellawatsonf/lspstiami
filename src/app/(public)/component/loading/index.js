import style from "./loading.module.css";

export default function LoadingComponent() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}
    >
      <img className={`${style.loadingStyle}`} src="/loadingstiami.gif" />
    </div>
  );
}
