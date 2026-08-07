function StatCard({title, total}) {
  return (
    <div className="stat-card display flex gap-2">
      <h1 className="title">{title}</h1>
      <p className="total">{total}</p>
    </div>
  );
}

export default StatCard;