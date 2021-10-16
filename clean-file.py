import os


dir_to_clean1 = '/Users/paulinec/Downloads/Character-Sprites/shoes'
dir_to_clean2 = '/Users/paulinec/Downloads/Character-Sprites/skirts'
test = '/Users/paulinec/Downloads/Character-Sprites/test'

path = dir_to_clean2

allItems = os.listdir(path)

for filename in allItems:
		file_name, file_ext = os.path.splitext(filename);
		fileSplit = file_name.split("-")
		if len(fileSplit) == 2 and int(fileSplit[1]) % 8 != 0:
			filePath = path+"/"+filename
			print(filePath)
			if os.path.isfile(filePath):
				# print("deleting: ")
				# print(filePath)
				os.remove(filePath)
			else:
				print("Not correct file")
		else:
			print("Keeping: ")
			print(filename)