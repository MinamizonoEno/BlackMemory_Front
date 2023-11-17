import { Box, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const NoDesignatedHolidaysPages = () => {
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
            雇用契約書や就業規則に所定の休日が存在しない
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            毎週少なくとも1回（または4週間を通じ4日以上）の休日が存在していない時、もしくはそもそも法定休日が存在していない場合それらを会社に改善、報酬の補填をすることを求められる権利があります。
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして「雇用契約書」や「労働条件通知書」が上げられます。
            また、日々の労働時間などを記録して提出する必要がある場合があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            1. 労働基準法における「休日労働」の定義
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            そもそも休日とは？ その種類と定義
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準法における「休日」とは、労働者が労働契約において労働義務を負わない日のことです。
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準法35条によれば、労働者は、毎週少なくとも1回（または4週間を通じ4日以上）の休日を与える義務があります。
            これが法定休日として呼ばれるものです。
          </Typography>
          <Typography sx={styles.listItem}>
            <strong>法定休日：</strong>週1回の休日を法律で定められたもの。
          </Typography>
          <Typography sx={styles.listItem}>
            <strong>法定外休日：</strong>
            会社が法定休日以外に設定した休日。休日の曜日は、会社で決めることができ、週に1回以上の休日が保証されていれば、曜日の自由な設定ができます。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            休日労働にあたるのはどんな勤務？
          </Typography>
          <Typography sx={styles.listItem}>
            「休日労働」は法定休日に勤務をさせられた場合にのみ該当します。法定休日の日曜日に働いた場合が一例で、法定外休日の土曜日に労働しても休日労働にはなりません。
          </Typography>
          <Typography sx={styles.listItem}>
            ただし、法定休日が設けられていない場合や、法定休日が特定できない場合は、労働基準法に従って休日労働が許される場合があります。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            割増率は？ 休日労働の賃金支払いと振替に関するルール
          </Typography>

          <Typography sx={styles.listItem}>
            <strong> 休日労働における割増賃金の考え方</strong>
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準法37条により、休日労働は通常の賃金の1.35倍以上で支払われなければなりません。
            基本給に休日手当が含まれている場合は、超過分に対する休日出勤手当が発生します。
          </Typography>
          <Typography sx={styles.listItem}>
            また、法定外休日の労働でも、週40時間を超えている場合は割増賃金の支払いが必要です。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>
              「振替休日」を設ける場合は、休日割増賃金は発生しない
            </strong>
          </Typography>
          <Typography sx={styles.listItem}>
            会社が「振替休日」を設ける場合、休日割増賃金は発生しません。
            振替休日は法定休日を別の日に振り替えるため、もとの法定休日に労働した場合でも、振替後に週1回の法定休日が確保されている限り休日労働とはみなされません。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>
              「代休」を取得した場合は、法定休日に労働した分の休日割増賃金が支払われる
            </strong>
          </Typography>
          <Typography sx={styles.listItem}>
            代休を取得した場合、法定休日に労働した分の休日割増賃金が支払われます。
            代休取得は、事後的に行われるため、もとの法定休日に労働した事実が残り、その分の割増賃金が支払われることになります。
            ただし、代休取得日には通常無給とされることが多いため、差し引きでは35％の割増賃金が支払われることになります。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            2. 休日労働のうち、労働基準法違反にあたる可能性が高いケース
          </Typography>

          <Typography sx={styles.listItem}>
            <strong> 36協定が締結されていない会社での休日労働</strong>
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準法36条に基づく「36協定」がない状態で休日労働をさせるのは違法です。
            この協定は、時間外労働や休日労働を行う際の条件や範囲を定め、違法な休日労働を防ぎます。
            ただし、法定外休日の勤務に関しては、1週間の総労働時間が40時間以内であれば、36協定が結ばれていなくても合法です。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong> 時間外労働の上限規制を超えた休日労働</strong>
          </Typography>
          <Typography sx={styles.listItem}>
            平成31年4月から大企業、令和2年4月から中小企業に適用される「時間外労働の上限規制」に違反するケースが考えられます。
            この規制では、時間外労働の上限は原則「月45時間、年360時間」とされていますが、特別な事情がある場合には規制を超えることが許されます。
            ただし、一定の基準を守る必要があり、これを超えると違法となり、会社に罰則が科せられます。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>割増賃金が未払いとなっている休日労働</strong>
          </Typography>
          <Typography sx={styles.listItem}>
            法定休日や週40時間を超えた法定外休日の時間外労働に対して、割増賃金が支払われていない場合は労働基準法違反です。
            労働者は実際の労働に対して割増賃金を受け取る権利があります。
          </Typography>

          <Typography sx={styles.listItem}>
            <strong>
              「管理職だから」を理由に休日の割増賃金が支払われていない場合
            </strong>
          </Typography>
          <Typography sx={styles.listItem}>
            「管理職だから」といっても、特定の条件を満たしていない限り、休日労働の割増賃金支払いを免れることは違法です。
            単なる肩書きだけではなく、経営者と同等な立場であるか、裁量権を有し、優遇措置が講じられていることが条件とされます。
            労働基準法の規定を守るべきであり、疑義があれば弁護士や労働基準監督署に相談することが重要です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
