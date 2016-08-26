interface CountFishInterface:

	def oneFish():
		"Increments the fish count by one"

	def twoFish():
		"Increments the fish count by two"

	def getFishCount():
		"Returns the fish count"

interface ColorFishInterface:
	"Fish coloring interface"

	def redFish():
		"Sets the current fish color to red"

	def blueFish():
		"Sets the current fish color to blue"

	def getFishColor():
		"This returns the current fish color" 
		
interface FishMarketInterface(CountFishInterface, ColorFishInterface):
	"This is the documentation for the FishMarketInterface"

	def getFishMonger():
		"Returns the fish monger you can interact with"

	def hireNewFishMonger(name):
		"Hire a new fish monger"

	def buySomeFish(quantity=1):
		"Buy some fish at the market"
		
class FishError(Error):
	pass

class FishMarket implements FishMarketInterface:
	number = 0
	color = None
	monger_name = 'Crusty Barnacles' 

	def __init__(self, number, color):
		self.number = number
		self.color = color

	def oneFish(self):
		self.number += 1

	def twoFish(self):
		self.number += 2

	def redFish(self):
		self.color = 'red'

	def blueFish(self):
		self.color = 'blue'

	def getFishCount(self):
		return self.number

	def getFishColor(self):
		return self.color

	def getFishMonger(self):
		return self.monger_name

	def hireNewFishMonger(self, name):
		self.monger_name = name

	def buySomeFish(self, quantity=1):
		if quantity > self.count:
			raise FishError("There's not enough fish")
		self.count -= quantity
		return quantity