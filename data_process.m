name = ["ci", 'ci2', 'usa', 'usa2', 'au', 'au2', 'ge', 'ge2', 'ja', 'ja2','kk', 'kk2', 'ma', 'ma2', 'si', 'si2', 'th', 'th2', 'vi', 'vi2'];
str = "./data/" + name(1) + ".xlsx";
countries = ["China", "United States", "Thailand", "Vietnam", "Malaysia", "Australia", "Singapore", "Korea, Rep.", "Japan", "Germany"];

index = 1;
pos = "A";

str = "./data/" + name(1) + ".xlsx";
read_table = readtable(str, "Sheet","Product-TimeSeries-Partner");
[M, N] = size(read_table);

for i = 1 : M
        for j = 1 : length(countries)
            if read_table(i,:).PartnerName == countries(j)
                tmp = read_table(i,:);
                index = index + 1;
                new_pos = pos + string(index);
                writetable(tmp,'final_data.xlsx','WriteVariableNames',false,'Sheet','Sheet1','Range',new_pos);
            end
    
        end
end
disp("finish " + str);
str = "";
for k = 2 : length(name)
    str = "./data/" + name(k) + ".xlsx";
    read_table = readtable(str, "Sheet","Product-TimeSeries-Partner");
    [M, N] = size(read_table);
    
    for i = 1 : M
        for j = 1 : length(countries)
            if read_table(i,:).PartnerName == countries(j)
                tmp = read_table(i,:);
                index = index + 1;
                new_pos = pos + string(index);
                writetable(tmp,'final_data.xlsx','WriteVariableNames',false,'Sheet','Sheet1','Range',new_pos);
            end
    
        end
    end
    disp("finish " + str);
    str = "";
end
disp("finish all");
