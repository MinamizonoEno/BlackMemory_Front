import { Box, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const BelowMinimumWagePage = () => {
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
            賃金が最低賃金を下回っている
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            最低賃金法は、経営者や事業主などの雇用者が従業員に支払うべき賃金の最低水準に関する法律です。この法律は労働基準法第28条に基づいて制定・実施されています。{" "}
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして給与明細書・タイムカード・源泉徴収票・雇用契約書が上げられます。
            また、日々の労働時間などを記録して提出する必要がある場合があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>1. 最低賃金法とは？</Typography>
          <Typography sx={styles.listItem}>
            最低賃金法は、経営者や事業主などの雇用者が従業員に支払うべき賃金の最低水準に関する法律です。この法律は労働基準法第28条に基づいて制定・実施されています。
          </Typography>
          <Typography sx={styles.subSectionHeader}>最低賃金法の目的</Typography>
          <Typography sx={styles.listItem}>
            最低賃金制度の目的は、すべての労働者に最低ラインの賃金を保障し、労働条件を改善して、生活の安定と労働力の向上、公正な事業競争を促進し、国民経済の健全な発展に寄与することです（同法第1条）。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            最低賃金を下回る賃金の規定は無効
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金を下回る賃金が規定された場合、その賃金は無効となり、自動的に最低賃金が適用されます。例えば、最低賃金が858円（福島県）で、時給800円でアルバイトが雇われた場合、時給は自動的に858円に修正されます。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            2. 最低賃金法の押さえておくべき具体的なルール
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金法にはいくつか押さえておくべき具体的なルールがあります。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            最低賃金法は雇用形態にかかわらず適用される
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金法は、雇用形態にかかわらず、全ての労働者に適用されます。従って、正社員だけでなく、パートやアルバイト、試用期間の労働者も最低賃金法の対象です。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            最低賃金の算入できない賃金
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金を判断する際には、算入できない賃金があります。臨時に支給される賃金、1か月を超える期間ごとに支給される賃金、残業代、休日出勤手当、深夜勤務手当などは算入できない賃金とされています。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            複数の都道府県に事業所がある場合の取り扱い
          </Typography>
          <Typography sx={styles.listItem}>
            企業が複数の都道府県に事業所を持つ場合、最低賃金は各都道府県ごとに適用されます。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            3. 最低賃金法に違反した場合の罰則・リスク
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金法に違反すると、罰則やリスクが発生します。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            最低賃金法違反に対する罰則
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金法違反には罰則があり、地域別最低賃金を下回る賃金しか支払わなかった場合、雇用者には最低50万円以下の罰金が科されます。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            労働基準監督署の行政指導
          </Typography>
          <Typography sx={styles.listItem}>
            刑事罰が科されなくても、最低賃金法違反は労働基準監督署による行政指導の対象となります。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            企業の評判への悪影響
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金法違反が判明すると、企業の評判に傷がつくことが避けられません。SNSの普及により、風評被害が発生する可能性もあります。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            労働者の離職率の悪化
          </Typography>
          <Typography sx={styles.listItem}>
            最低賃金を下回る賃金しか支給されない場合、従業員の離職率が悪化する可能性があります。他の職場で良い条件が得られる場合、労働者は転職を選びやすくなります。
          </Typography>
          <Typography sx={styles.subSectionHeader}>未払い賃金の請求</Typography>
          <Typography sx={styles.listItem}>
            最低賃金法に基づいて、労働者が未払い賃金を請求する可能性があります。未払い賃金の請求には時効があるため、注意が必要です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
