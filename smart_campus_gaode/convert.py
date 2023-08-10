import pandas as pd

def excel_to_json(excel_path, output_path):
    # 读取 Excel 文件
    df = pd.read_excel(excel_path)
    
    # 将 DataFrame 转换为 JSON 格式，并保存到输出文件，设置编码为 utf-8
    with open(output_path, "w", encoding="utf-8") as f:
        df.to_json(f, orient="records", force_ascii=False, indent=4)

if __name__ == "__main__":
    excel_file = "2026届高一（11）班学生信息.xlsx"
    output_json = "output.json"
    excel_to_json(excel_file, output_json)