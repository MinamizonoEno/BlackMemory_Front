import { Box, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const NoBreaksExceedingPage = () => {
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
            労働時間が６時間を超える場合に４５分・８時間を超える場合に１時間の休憩がない
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            最低限の労働時間が６時間を超える場合に４５分・８時間を超える場合に１時間の休憩がない場合
            、それらを会社に改善、報酬の補填をすることを求められる権利があります。
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして「雇用契約書」や「労働条件通知書」が上げられます。
            また、日々の労働時間などを記録して提出する必要がある場合があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            1. 労働基準法における休憩時間の取り扱い
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            休憩時間に関する法律を知ろう
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準法第34条によれば、労働時間が6時間を超える場合には少なくとも45分、8時間を超える場合には少なくとも1時間の休憩時間を労働時間の途中に与えなければなりません。
            休憩時間は一斉に与えられ、36協定がある場合はその内容に従うことが認められます。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            最低限与えなければならない休憩時間
          </Typography>
          <Typography sx={styles.listItem}>
            <strong>休憩時間の最低基準は以下の通り：</strong>
          </Typography>
          <Typography sx={styles.listItem}>
            労働時間が6時間以下の場合・・・休憩を与える義務はない
          </Typography>
          <Typography sx={styles.listItem}>
            労働時間が6時間を超えて8時間以下の場合・・・少なくとも45分
          </Typography>
          <Typography sx={styles.listItem}>
            労働時間が8時間を超える場合・・・少なくとも1時間
          </Typography>
          <Typography sx={styles.listItem}>
            これは1日の労働時間に対する規定であり、休憩時間を与えない場合は違法となります。ただし、残業中の休憩については法令に特段の規定がありません。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            2. 休憩時間中の労働に対する違反
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            労働時間の途中に与える原則
          </Typography>
          <Typography sx={styles.listItem}>
            休憩は労働時間の途中で与えられ、休憩中には完全に労働から解放されるべきです。休憩時間中に電話番や来客対応、オフィスからの出入りを禁止するような措置は休憩とは言えません。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            一斉に付与する原則
          </Typography>
          <Typography sx={styles.listItem}>
            休憩は職場の労働者全体に対して一斉に付与されるべきです。ただし、一部の業種や労使協定によって例外がある場合もあります。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            3. 休憩時間のトラブル解決と労働基準監督署への相談
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            労働基準監督署への相談手順
          </Typography>
          <Typography sx={styles.listItem}>
            トラブルが解決しない場合、以下の手順で労働基準監督署への相談が考えられます：
          </Typography>
          <Typography sx={styles.listItem}>
            まず、人事・労務担当者に相談し改善を求める。
          </Typography>
          <Typography sx={styles.listItem}>
            改善が見られない場合、労働基準監督署に相談し、休憩時間の法令違反についてアドバイスを求める。
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準監督署で相談した結果、改善が見込めない場合、他の手続きを検討する。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            労働基準監督署の役割
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準監督署は会社の法令遵守をチェックし、指導する機関であり、違反が確認されると是正勧告を行います。
            ただし、直接的な解決策を提供するものではありません。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            4. 休憩時間中の労働に対する賃金の請求方法
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            手待時間や仮眠時間での賃金未払いに対する対処方法
          </Typography>
          <Typography sx={styles.listItem}>
            手待時間や労働時間と評価される仮眠時間の未払い賃金に対する請求方法：
          </Typography>
          <Typography sx={styles.listItem}>
            賃金支払いを求める書面を送付する。
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準監督署に申告して是正勧告を受ける。
          </Typography>
          <Typography sx={styles.listItem}>
            都道府県の労働局に相談し、助言・指導を求める。
          </Typography>
          <Typography sx={styles.listItem}>
            裁判外紛争解決手続（ADR）を利用して和解を目指す。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            賃金未払いへの対処手段
          </Typography>
          <Typography sx={styles.listItem}>
            これらの手段を組み合わせて、労働者が適切な賃金を受け取れるよう努めることが重要です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
