import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const WorkCondMismatchPage = () => {
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
            労働条件が労働条件通知書に記載されていた事実と異なる
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography
            sx={{ fontSize: "1.3rem", color: "#fff", marginBottom: "3%" }}
          >
            求人票ではなく「雇用契約書」や「労働条件通知書」が実際の労働条件と違う場合は違法のため会社には改善、報酬の補填をすることを求められる権利があります。
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして「雇用契約書」や「労働条件通知書」が上げられます。
            <br />
            また、賃金の差異がある場合はそれが分かる書類や、労働条件の違いであれば日々の労働時間などを記録して提出する必要があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            よく見受けられる条件の相違とは
          </Typography>
          <Typography sx={styles.listItem}>
            求人票に掲載された労働条件と実際の労働条件が異なる場合、以下はよくあるケースです。
          </Typography>
          <Typography sx={styles.listItem}>
            正社員の求人と謳われていたが、実際には契約社員であった
          </Typography>
          <Typography sx={styles.listItem}>
            残業がほとんどないと宣伝されていたが、実際は通常通りに残業がある
          </Typography>
          <Typography sx={styles.listItem}>
            基本給に残業代が含まれていた
          </Typography>
          <Typography sx={styles.listItem}>給与が期待よりも低かった</Typography>
          <Typography sx={styles.listItem}>
            週休2日制と説明されていたが、実際には隔週土曜日の出勤が必要だった
          </Typography>

          <Typography sx={styles.sectionHeader}>
            労働基準法に違反する深刻な相違とは
          </Typography>
          <Typography sx={styles.listItem}>
            求人票における「見込み」とは異なり、「労働条件の明示」内容と実際の労働条件が一致しない場合、労働者は明示された条件通りに要求する権利があります。
          </Typography>
          <Typography sx={styles.listItem}>
            企業が一方的に不利な条件に変更する場合は契約違反となり、同意がなければ違法です。
          </Typography>
          <Typography sx={styles.listItem}>
            労働者が同意した場合でも、一方的な変更には慎重になる必要があります。速やかに確認が必要です。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            入社時の「労働条件の明示」が重要な要点
          </Typography>
          <Typography sx={styles.listItem}>
            求人票は広く配布されますが、「雇用契約書」や「労働条件通知書」は具体的に明示される重要な書類です。
          </Typography>
          <Typography sx={styles.listItem}>
            最終的な労働条件はこれらの書類に明示され、雇用契約は双方が同意した上で成立します。
          </Typography>
          <Typography sx={styles.listItem}>
            契約時には以下の事項が具体的に記載されていることが重要です。
          </Typography>
          <List sx={styles.listItem}>
            <ListItem>契約期間と更新に関する条件</ListItem>
            <ListItem>就業場所と業務内容</ListItem>
            <ListItem>就業時間と終了時刻</ListItem>
            <ListItem>残業の有無、休憩時間、休日、休暇</ListItem>
            <ListItem>賃金の決定と支払方法、締日と支払日</ListItem>
            <ListItem>退職に関する取り決め</ListItem>
          </List>

          <Typography sx={styles.sectionHeader}>
            ケース別トラブルに対処する方法
          </Typography>
          <Typography sx={styles.listItem}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              面接時の説明で条件の相違に気がついた場合
            </Typography>
            面接時に労働条件の相違に気付いたら、直ちに企業に確認するのが良いでしょう。単なる誤解の可能性もあるため、ハローワークで紹介された求人ならハローワークへ、転職エージェントの場合は担当のコンサルタントに相談しましょう。問題が早期に解決されることが肝要です。
          </Typography>
          <Typography sx={styles.listItem}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              内定後、契約書で相違に気づいた場合
            </Typography>
            内定後に「雇用契約書」や「労働条件通知書」の内容で相違に気づいた場合、企業に申し出ます。改善が見られない場合、ハローワークの求人なら相談するか、内定辞退を検討するべきです。変更された条件に同意するのは望ましくありません。
          </Typography>
          <Typography sx={styles.listItem}>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              入社後に条件の相違に気づいた場合
            </Typography>
            入社後に労働条件の相違に気づいたら、まずは企業に連絡しましょう。改善が見込まれない場合は退職を検討します。条件に合致しない契約の場合、労働者は法的に権利が認められており、引き留めや脅しには屈する必要はありません。給与が約束よりも低かった場合、差額請求も可能です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
