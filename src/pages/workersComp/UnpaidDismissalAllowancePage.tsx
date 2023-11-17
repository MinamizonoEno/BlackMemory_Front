import { Box, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const UnpaidDismissalAllowancePage = () => {
  const styles = {
    paper: {
      padding: "5%",
      margin: "5%",
      marginTop: "0%",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    sectionHeader: {
      fontSize: "2rem",
      color: "#fff",
      fontWeight: "bold",
      margin: "16px 0",
    },
    subSectionHeader: {
      fontSize: "1.5rem",
      color: "#fff",
      fontWeight: "bold",
      margin: "12px 0",
    },
    listItem: {
      fontSize: "1rem",
      color: "#fff",
      marginBottom: "3%",
    },
  };
  return (
    <MainPageLayout>
      <Box sx={{ overflow: "auto", height: "100%" }}>
        <Paper sx={styles.paper}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              color: "#fff",
              fontWeight: "bold",
              margin: "16px 0",
            }}
          >
            解雇予告手当の支払いがされていない
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            解雇予告手当は、解雇予告をすることなく労働者を解雇する場合に、会社に支払いが義務付けられているお金です。労働基準法では、解雇する場合は、労働者に対して、少なくとも30日前までに解雇の予告をしなければならないと定められています（労働基準法20条1項）。{" "}
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして給与明細書・タイムカード・源泉徴収票・雇用契約書が上げられます。
            また、日々の労働時間などを記録して提出する必要がある場合があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            解雇時にもらえるお金、「解雇予告手当」とは？
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            （1）解雇予告手当とはなにか？
          </Typography>
          <Typography sx={styles.listItem}>
            解雇予告手当は、解雇予告をすることなく労働者を解雇する場合に、会社に支払いが義務付けられているお金です。労働基準法では、解雇する場合は、労働者に対して、少なくとも30日前までに解雇の予告をしなければならないと定められています（労働基準法20条1項）。
          </Typography>

          <Typography sx={styles.listItem}>
            解雇予告の期間が30日よりも短い場合には、不足する日数分の平均賃金を解雇予告手当として受け取ることができます（労働基準法20条2項）。この解雇予告手当は、突然の解雇によって労働者の生活が困窮しないようにするため、支払われるお金です。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            （2）解雇予告手当の対象者や支払日は？
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>① 対象者</strong>
            解雇予告手当は、会社に雇用されている労働者が支払われる対象となります。正社員に限らず、アルバイトやパート、有期雇用労働者などの非正規雇用労働者にも解雇予告手当が支払われます。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>② 支払日</strong>
            解雇予告手当の支払日は、解雇予告をせずに即時解雇する場合と、解雇予告をする場合で以下のように異なっています。
          </Typography>

          <Typography sx={styles.listItem}>
            即時解雇する場合……解雇と同時に支払う
          </Typography>
          <Typography sx={styles.listItem}>
            解雇予告をする場合……解雇日までに支払う
          </Typography>

          <Typography sx={styles.listItem}>
            ただし、最後の給料と一緒に解雇予告手当が支払われるケースが多いようです。解雇予告手当は、法律上、支払いが義務付けられているお金ですが、次章で説明するように一定の事由がある場合には、例外的に支払われないことがあります。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            解雇予告手当が支払われない場合の対処法は？
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>
              （1）不当解雇の可能性があるため不当解雇の証拠を集める
            </strong>
            解雇予告手当は、法律上、使用者に支払いが義務付けられているお金です。解雇予告手当の支払いが必要なのに、その支払いがないという場合には、そもそも解雇の要件を満たさない不当解雇である可能性があります。そのため、まずは、解雇の有効性を判断するための証拠を集めることが大切です。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>不当解雇を争うための証拠</strong>
            <ul>
              <li>雇用契約書</li>
              <li>就業規則</li>
              <li>解雇通知書</li>
              <li>人事評価書</li>
            </ul>
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
