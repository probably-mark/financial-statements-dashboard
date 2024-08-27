import org.apache.spark.sql.SparkSession;

val spark = {SparkSession.builder()
  .appName("Postgres Integration")
  .master("spark://spark-master:7077")
  .getOrCreate();}

val jdbcUrl = "jdbc:postgresql://db:5432/postgres?user=postgres&password=postgres";

val df = {spark.read
  .format("jdbc")
  .option("url", jdbcUrl)
  .option("dbtable", "iris")
  .option("user", "postgres")
  .option("password", "postgres")
  .load();}

df.show();

df.where("petal_length >= 1.4").show()
